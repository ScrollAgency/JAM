// lib/libellule/getComponentInfo.ts
import fs from "fs";
import path from "path";

export function getComponentInfo(group: string, name: string) {
  const infoPath = path.join(process.cwd(), "plasmic-library", group, name, "infos.json");

  if (fs.existsSync(infoPath)) {
    const data = fs.readFileSync(infoPath, "utf-8");
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  return null;
}
