// pages/api/persist-auth.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  if (!token) return res.status(400).json({ error: "No token provided" });

  res.setHeader("Set-Cookie", [
    `sb-${process.env.NEXT_PUBLIC_SUPABASE_ID}-auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=3600`,
  ]);

  res.status(200).json({ success: true });
}
