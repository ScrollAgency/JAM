import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const libraryDir = path.join(process.cwd(), 'plasmic-library');
    const outputPath = path.join(process.cwd(), 'pages/api/lib-ellule/system/Library/componentsList.json');

    // Dossiers à exclure
    const excludedDirs = ['.git', '.github', 'icons'];

    const categories = await fs.readdir(libraryDir);
    const result: Record<string, any> = {};

    for (const category of categories) {
      if (excludedDirs.includes(category)) continue;

      const categoryPath = path.join(libraryDir, category);
      const isCategoryDir = (await fs.lstat(categoryPath)).isDirectory();
      if (!isCategoryDir) continue;

      const components = await fs.readdir(categoryPath);

      for (const componentName of components) {
        const componentPath = path.join(categoryPath, componentName);
        const isComponentDir = (await fs.lstat(componentPath)).isDirectory();
        if (!isComponentDir) continue;

        const versionFilePath = path.join(componentPath, 'version');
        let localVersion = '0.0.0';

        try {
          localVersion = (await fs.readFile(versionFilePath, 'utf-8')).trim();
        } catch {
          console.warn(`Version non trouvée pour ${componentName}`);
        }

        result[componentName] = {
          localVersion,
          remoteVersion: localVersion,
          status: 'uptodate',
          category,
        };
      }
    }

    await fs.writeFile(outputPath, JSON.stringify(result, null, 2), 'utf-8');

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Erreur de génération de componentsList.json :', error);
    return res.status(500).json({ error: 'Erreur interne du serveur', details: error.message });
  }
}
