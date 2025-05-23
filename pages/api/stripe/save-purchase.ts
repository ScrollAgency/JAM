import type { NextApiRequest, NextApiResponse } from "next";
import { corsPolicy } from "../../../lib/middleware/corsPolicy";
import { supabaseServer } from "../../../lib/supabaseServer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = Array.isArray(req.body) ? req.body[0] : req.body;
    const { sessionId, customerId, products } = body;

    if (!sessionId || !customerId || !products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Invalid data" });
    }

    // 🔎 Récupérer les valeurs existantes
    const { data: existingData, error: fetchError } = await supabaseServer
      .from("stripe_info")
      .select("recharge_classic, recharge_lastminute, recharge_boost")
      .eq("customer_id", customerId)
      .single();

    if (fetchError) {
      console.error("❌ Erreur de récupération Supabase :", fetchError);
      return res.status(500).json({ error: fetchError.message });
    }

    const updates: Record<string, number> = {};

    for (const product of products) {
      const { product_id, quantity } = product;

      if (!product_id || typeof quantity !== 'number') continue;

      switch (product_id) {
        case "prod_S94I2bEjJBgtUi":
          updates.recharge_classic = (existingData?.recharge_classic || 0) + quantity;
          break;
        case "prod_S94JK9sfmhTanv":
          updates.recharge_lastminute = (existingData?.recharge_lastminute || 0) + quantity;
          break;
        case "prod_S94Jb2TNBEp2vU":
          updates.recharge_boost = (existingData?.recharge_boost || 0) + quantity;
          break;
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No valid products found" });
    }

    const { error } = await supabaseServer
      .from("stripe_info")
      .update(updates)
      .eq("customer_id", customerId);

    if (error) {
      console.error("📛 Erreur de mise à jour Supabase :", error);
      throw error;
    }

    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Erreur Supabase :", err);
    res.status(500).json({ error: err?.message || "Unknown error" });
  }
}
