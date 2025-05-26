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

  if (action === "create" && (!session_id || typeof session_id !== "string")) {
    return res.status(400).json({ error: "Session ID manquant" });
  }

  try {
    if (action === "create") {
      const {
        customer_id,
        price_id,
        recharge_boost,
        recharge_classic,
        recharge_lastminute,
        status,
        subscription_id,
        user_id,
      } = req.body;

      if (
        !customer_id ||
        !price_id ||
        recharge_boost === undefined ||
        recharge_classic === undefined ||
        recharge_lastminute === undefined ||
        !status ||
        !subscription_id ||
        !user_id
      ) {
        return res.status(400).json({ error: "Données manquantes dans le corps de la requête" });
      }

      const { error } = await supabaseServer
        .from("stripe_info")
        .insert([
          {
            customer_id,
            price_id,
            recharge_boost,
            recharge_classic,
            recharge_lastminute,
            session_id,
            status,
            subscription_id,
            user_id,
          },
        ]);

      if (error) throw error;

      return res.status(201).json({ success: true, message: "Ligne créée dans stripe_info" });
    }

    if (action === "update") {
      const { subscription_id, price_id, status } = req.body;

      if (!subscription_id || !price_id || !status) {
        return res.status(400).json({ error: "subscription_id, price_id et status sont requis" });
      }

      console.log("BODY REÇU :", req.body);

      // Update la ligne où subscription_id = subscription_id
      const { error } = await supabaseServer
        .from("stripe_info")
        .update({ price_id, status })
        .eq("subscription_id", subscription_id);

      if (error) throw error;

      return res.status(200).json({ success: true, message: "Ligne mise à jour" });
    }

    if (action === "cancel") {
      const { subscription_id } = req.body;

      if (!subscription_id) {
        return res.status(400).json({ error: "subscription_id est requis" });
      }

      // Update le status en "cancel" pour la subscription_id donnée
      const { error } = await supabaseServer
        .from("stripe_info")
        .update({ status: "cancel" })
        .eq("subscription_id", subscription_id);

      if (error) throw error;

      return res.status(200).json({ success: true, message: "Abonnement annulé" });
    }

    return res.status(400).json({ error: "Action non supportée" });
  } catch (err: any) {
    console.error("Erreur dans la route Stripe validate-subscription :", err);
    return res.status(500).json({ error: err.message });
  }
}
