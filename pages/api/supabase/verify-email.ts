// /pages/api/verify-email.ts
import { corsPolicy } from '../../../lib/middleware/corsPolicy';
import { supabase } from '../../../lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsPolicy(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const { data: user, error } = await supabase
      .from('public.user')
      .select('email')
      .eq('email', email)
      .single();

    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
