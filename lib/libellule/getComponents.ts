import fs from "fs";
import path from "path";

const LIB_DIR = path.join(process.cwd(), "plasmic-library");

function toPascalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getComponents() {
  const components = [];

  const groups = fs.readdirSync(LIB_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());

  for (const groupDir of groups) {
    const groupName = groupDir.name;
    const groupPath = path.join(LIB_DIR, groupName);
    const componentsDirs = fs.readdirSync(groupPath, { withFileTypes: true }).filter((d) => d.isDirectory());

    for (const compDir of componentsDirs) {
      const compName = compDir.name;
      const compPath = path.join(groupPath, compName);

      const files = fs.readdirSync(compPath);
      const hasComponent = files.includes(`${compName}.tsx`) || files.includes(`${compName}.jsx`);

      if (hasComponent) {
        const importPath = `./${groupName}/${compName}/${compName}`;
        components.push({
        group: groupName,
        name: toPascalCase(compName), // Ex: "ButtonPrimary"
        dirName: compName, // Ex: "buttonPrimary"
        importPath,
      });
      }
    }
  }

  return components;
}
