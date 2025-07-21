const CardSimpleMeta = {
  name: "CardSimple",
  section: "8.⚡ Others",
  displayName: "Card simple",
  description: "Description de cette belle carte",
  importPath: "./plasmic-library/cards/CardSimple",
  thumbnailUrl: "https://static1.plasmic.app/insertables/modal.svg",

  props: {
    title: {
      type: "string",
      defaultValue: "Default Title",
    },
    color: {
      type: "string",
      defaultValue: "#000000",
    },
  },
};

export default CardSimpleMeta;