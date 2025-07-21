const HeroCardMeta = {
  name: "HeroCard",
  section: "7.🧩 UI",
  displayName: "Hero Card",
  description: "Une belle carte Hero avec image et bouton",
  importPath: "./plasmic-library/ui/HeroCard",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/HeroCard.png`,

  props: {
    title: {
      type: "string",
      defaultValue: "Available soon.",
    },
    imageUrl: {
      type: "string",
      defaultValue: "https://heroui.com/images/hero-card.jpeg",
    },
    buttonText: {
      type: "string",
      defaultValue: "Notify me",
    },
    showHeader: {
      type: "boolean",
      defaultValue: true,
      description: "Afficher ou masquer le header de la carte",
    },
    headerTitle: {
      type: "string",
      defaultValue: "Frontend Radio",
      description: "Titre du header",
    },
    headerSubtitle: {
      type: "string",
      defaultValue: "Daily Mix",
      description: "Sous-titre du header",
    },
    headerDescription: {
      type: "string",
      defaultValue: "12 Tracks",
      description: "Description du header",
    },
  },
};

export default HeroCardMeta;
