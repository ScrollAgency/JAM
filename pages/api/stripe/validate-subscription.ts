import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../../lib/stripeServer";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";
import { supabaseServer } from "../../../lib/supabaseServer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  const { session_id, action } = req.query;

  if (!action || typeof action !== "string") {
    return res.status(400).json({ error: "Action manquante" });
  }

  if (action === "create") {
    if (!session_id || typeof session_id !== "string") {
      return res.status(400).json({ error: "Session ID manquant" });
    }

    try {
      // Récupérer la session checkout Stripe
      const session = await stripe.checkout.sessions.retrieve(session_id);
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const userEmail = session.customer_email;

      if (!customerId || !subscriptionId || !userEmail) {
        return res.status(400).json({ error: "Données manquantes dans la session Stripe" });
      }

      // Récupérer l'abonnement complet pour obtenir le price_id et product_id
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const status = subscription.status;
      const price = subscription.items.data[0].price;
      const priceId = price.id;
      const productId = typeof price.product === "string" ? price.product : price.product.id;

      // Récupérer le user_id depuis Supabase via l'email
      const { data: user, error: userError } = await supabaseServer
        .from("users")
        .select("id")
        .eq("email", userEmail)
        .single();

      if (userError || !user) {
        return res.status(404).json({ error: "Utilisateur non trouvé dans Supabase" });
      }

      const userId = user.id;

      // Insérer dans stripe_info
      const { error: insertError } = await supabaseServer.from("stripe_info").insert([
        {
          customer_id: customerId,
          price_id: priceId,
          product_id: productId,
          recharge_boost: 0,
          recharge_classic: 0,
          recharge_lastminute: 0,
          session_id,
          status,
          subscription_id: subscriptionId,
          user_id: userId,
        },
      ]);

      if (insertError) throw insertError;

      return res.status(201).json({ success: true, message: "Ligne stripe_info créée" });

    } catch (err: any) {
      console.error("Erreur validate-subscription :", err);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: "Action non supportée" });
}
