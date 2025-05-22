// /pages/api/stripe/get-session.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-04-30.basil",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsPolicy(req, res);
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sessionId = req.query.session_id as string;

  if (!sessionId) {
    return res.status(400).json({ error: "Missing session_id" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "line_items"],
    });

    res.status(200).json({ session });
  } catch (err: any) {
    console.error("Erreur Stripe session :", err);
    res.status(500).json({ error: err.message });
  }
}
