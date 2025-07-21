// pages/api/lib-ellule/save-infos.ts
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { group, name, data } = req.body;

  if (!group || !name || !data) return res.status(400).json({ error: "Missing parameters." });

  const dirPath = path.join(process.cwd(), "plasmic-library", group, name);
  const filePath = path.join(dirPath, "infos.json");

  try {
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to write file." });
  }
}
