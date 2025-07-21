const SeparatorMeta = {
  name: "Separator",
  section: "7.🧩 UI",
  displayName: "Séparateur",
  description: "Un séparateur visuel qui peut être horizontal ou vertical",
  importPath: "./plasmic-library/ui/Separator",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/Separator.png`,

  props: {
    orientation: {
      type: "string",
      description: "Orientation du séparateur (horizontal ou vertical)",
      defaultValue: "horizontal",
    },
    decorative: {
      type: "boolean",
      description: "Si le séparateur est décoratif",
      defaultValue: true,
    },
    className: {
      type: "string",
      description: "Classes CSS additionnelles",
      defaultValue: "",
    },
  },
};

export default SeparatorMeta; 