import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { group, dirName } = req.query;

  if (typeof group !== "string" || typeof dirName !== "string") {
    return res.status(400).json({ error: "Invalid parameters" });
  }

  const infoPath = path.join(process.cwd(), "plasmic-library", group, dirName, "infos.json");

  if (!fs.existsSync(infoPath)) {
    return res.status(404).json({ error: "infos.json not found" });
  }

  try {
    const data = fs.readFileSync(infoPath, "utf-8");
    return res.status(200).json(JSON.parse(data));
  } catch {
    return res.status(500).json({ error: "Failed to read infos.json" });
  }
}
