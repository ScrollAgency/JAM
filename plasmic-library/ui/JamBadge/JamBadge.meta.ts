const JamBadgeMeta = {
  name: "JamBadge",
  section: "7.🧩 UI",
  displayName: "Badge JAM",
  description: "Un badge comme un chips",
  importPath: "./plasmic-library/ui/JamBadge",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/JamBadge.png`,

  props: {
    size: {
      type: "choice",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    icon: {
      type: "string",
      description: "URL de l'icône affichée dans le badge.",
    },
    color: {
      type: "choice",
      options: ["gray", "red", "yellow", "green", "blue", "purple"],
      defaultValue: "gray",
    },
    instance: {
      type: "number",
      description: "Instance associée au badge (affichée après le texte).",
    },
    label: {
      type: "string",
      defaultValue: "Badge",
      description: "Texte affiché dans le badge.",
    },
  },
};

export default JamBadgeMeta;
