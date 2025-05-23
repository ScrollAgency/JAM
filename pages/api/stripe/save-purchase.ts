// /pages/api/stripe/save-purchase.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";
import { supabaseServer } from '../../../lib/supabaseServer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { sessionId, products, customerEmail } = req.body;

    if (!sessionId || !products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const { error } = await supabaseServer.from("stripe_infos").insert({
      session_id: sessionId,
      email: customerEmail,
      products,
    });

    if (error) throw error;

    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Erreur Supabase :", err);
    res.status(500).json({ error: err.message });
  }
}
