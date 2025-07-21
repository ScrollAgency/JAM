const ActionButtonMeta = {
  name: "ActionButton",
  section: "2.🏷️ Forms",
  displayName: "Action Button",
  description: "Button used in Job Around Me project",
  importPath: "./plasmic-library/forms/ActionButton",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/ActionButton.png`,

  props: {
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    iconImage: "imageUrl",
    label: "string",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [],
    },
    isSubmit: {
      type: "boolean",
      defaultValue: false,
      description: "Si coché, ce bouton valide le formulaire parent.",
    },
  },
};

export default ActionButtonMeta;
