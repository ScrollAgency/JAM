const TextLinkMeta = {
  name: "TextLink",
  section: "8.⚡ Others",
  displayName: "Text Link",
  description: "Text for links from JAM",
  importPath: "./plasmic-library/ui/TextLink",
  thumbnailUrl: "https://static1.plasmic.app/insertables/text.svg",

  props: {
    redirect: {
      type: "string",
      defaultValue: "",
    },
    label: "string",
    size: {
      type: "choice",
      defaultValue: "Small",
      options: ["Small", "Large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "None",
      options: ["Start", "None", "End"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
};

export default TextLinkMeta;
