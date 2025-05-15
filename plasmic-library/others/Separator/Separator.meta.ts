interface ComponentMeta {
  name: string;
  props: Record<string, { type: string; defaultValue: string }>;
  section?: string;
  displayName?: string;
  description?: string;
  thumbnailUrl?: string;
  importPath?: string;
}

const meta: ComponentMeta = {
  name: "Separator",
  displayName: "Séparateur",
  description: "Un séparateur visuel qui peut être horizontal ou vertical",
  section: "UI",
  props: {
    orientation: {
      type: "string",
      defaultValue: "horizontal",
    },
    decorative: {
      type: "boolean",
      defaultValue: "true",
    },
    className: {
      type: "string",
      defaultValue: "",
    },
  },
};

export default meta; 