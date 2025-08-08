import type { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../../lib/stripeServer";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";
import { supabaseServer } from "../../../lib/supabaseServer";

async function getSubscriptionData(session_id: string) {

  // test temporaire dans ton handler ou au début de getSubscriptionData
const { data: adminTest, error: adminError } = await supabaseServer.auth.admin.listUsers({ page: 1, perPage: 1 });

console.log("Admin access test:", { adminTest, adminError });

console.log("isServiceRole:", supabaseServer.auth.signInWithPassword === undefined);


  // Récupérer la session checkout Stripe
  const session = await stripe.checkout.sessions.retrieve(session_id);
  const subscriptionId = session.subscription as string;
  const customerId = session.customer as string;

  let userEmail = session.customer_email;
  console.log("Email from session : ", userEmail)
  console.log("Customer id from session : ", customerId)
  if (!userEmail) {
    const customer = await stripe.customers.retrieve(customerId);
    if ("email" in customer && customer.email) {
      userEmail = customer.email;
    } else {
      throw new Error("Email client introuvable ou client supprimé");
    }
  }
  console.log("Email from supabase ? : ", userEmail)
  if (!customerId || !subscriptionId || !userEmail) {
    throw new Error("Données manquantes dans la session Stripe");
  }

  // Récupérer l'abonnement complet Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const status = subscription.status;
  const price = subscription.items.data[0].price;
  const priceId = price.id;
  const productId = typeof price.product === "string" ? price.product : price.product.id;
  console.log("SUPABASE_SERVICE_ROLE_KEY", process.env.SUPABASE_SERVICE_ROLE_KEY);
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  console.log("Email avant requête supabase : ", userEmail)

  const { data: pgRole, error: roleError } = await supabaseServer.rpc("current_user_role");
  console.log("Rôle Postgres actif :", pgRole, roleError);

  // Récupérer le user_id depuis Supabase via email
  const { data: user, error: userError } = await supabaseServer
    .schema("public")
    .from("user")
    .select("id")
    .eq("email", userEmail)
    .single();

  console.log("userError:", userError);
  console.log("user:", user);
  if (userError || !user) {
    throw new Error("Utilisateur non trouvé dans Supabase");
  }

  return {
    customerId,
    subscriptionId,
    userEmail,
    priceId,
    productId,
    status,
    userId: user.id,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  const { session_id, action } = req.query;

  if (!action || typeof action !== "string") {
    return res.status(400).json({ error: "Action manquante" });
  }

  if (!session_id || typeof session_id !== "string") {
    return res.status(400).json({ error: "Session ID manquant" });
  }

  try {
    const data = await getSubscriptionData(session_id);

    if (action === "create" || action === "update") {
      // Utilisation d'upsert avec la contrainte unique sur customer_id dans la table stripe_info
      const { error } = await supabaseServer.from("stripe_info").upsert(
        {
          customer_id: data.customerId,
          price_id: data.priceId,
          product_id: data.productId,
          recharge_boost: 0,
          recharge_classic: 0,
          recharge_lastminute: 0,
          session_id: session_id,
          status: data.status,
          subscription_id: data.subscriptionId,
          user_id: data.userId,
        },
        {
          onConflict: "customer_id",
          // Si tu veux, tu peux aussi spécifier `ignoreDuplicates: false` pour forcer la mise à jour
        }
      );

      if (error) throw error;

      return res.status(200).json({
        success: true,
        message: `Ligne stripe_info ${action === "create" ? "créée" : "mise à jour"}`,
      });
    }

    return res.status(400).json({ error: "Action non supportée" });
  } catch (err: any) {
    console.error("Erreur validate-subscription :", err);
    return res.status(500).json({ error: err.message });
  }
}
