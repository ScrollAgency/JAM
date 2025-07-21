import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import * as path from "path";

// Dossier racine contenant les composants
const LIB_DIR = "./plasmic-library";

// Fichier de sortie
const OUTPUT_FILE = "./plasmic-library/components.ts";

// Fonction utilitaire pour formater le nom du composant
const toPascalCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Fonction principale appelée dans le handler
function generateComponentExports(): string {
  const exportsByGroup: Record<string, string[]> = {};

  function walkDir(dirPath: string, parent: string = "") {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const componentName = entry.name;
        const fullPath = path.join(dirPath, componentName);
        const files = fs.readdirSync(fullPath);

        const hasComponent =
          files.includes(`${componentName}.tsx`) || files.includes(`${componentName}.jsx`);
        const hasMeta =
          files.includes(`${componentName}.meta.ts`) || files.includes(`${componentName}.meta.js`);

        if (hasComponent) {
          // Get relative path from LIB_DIR instead of from "."
          const relPathFromLib = path.relative(LIB_DIR, fullPath).replace(/\\/g, "/");
          const pascalName = toPascalCase(componentName);
          const groupName = parent || "Other";

          if (!exportsByGroup[groupName]) exportsByGroup[groupName] = [];

          exportsByGroup[groupName].push(`//       ${pascalName}`);
          exportsByGroup[groupName].push(`export { default as ${pascalName} } from "./${relPathFromLib}/${componentName}";`);

          if (hasMeta) {
            exportsByGroup[groupName].push(
              `export { default as ${pascalName}Meta } from "./${relPathFromLib}/${componentName}.meta";`
            );
          }
        } else {
          walkDir(fullPath, parent || path.basename(dirPath));
        }
      }
    }
  }

  // Lancer le scan
  const subDirs = fs.readdirSync(LIB_DIR, { withFileTypes: true });
  for (const dirent of subDirs) {
    if (dirent.isDirectory()) {
      walkDir(path.join(LIB_DIR, dirent.name), dirent.name);
    }
  }

  // Générer le contenu final
  const content: string[] = [];
  Object.entries(exportsByGroup).forEach(([group, lines]) => {
    content.push(`// ${group}`);
    content.push(...lines);
    content.push("");
  });

  fs.writeFileSync(OUTPUT_FILE, content.join("\n"));

  return `✅ Fichier "${OUTPUT_FILE}" généré avec succès.`;
}


// API Route Handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée. Utilisez POST." });
  }

  try {
    const message = generateComponentExports();
    return res.status(200).json({ message });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Erreur serveur" });
  }
}