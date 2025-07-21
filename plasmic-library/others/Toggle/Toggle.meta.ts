const ToggleMeta = {
  name: "Toggle",
  section: "8.⚡ Others",
  displayName: "Toggle",
  description: "Toggle",
  importPath: "./plasmic-library/ui/Toggle",
  thumbnailUrl: "https://static1.plasmic.app/insertables/switch.svg",

  props: {
    disabled: {
      type: "boolean",
      defaultValue: false,
      description: "Si `true`, désactive le toggle et empêche toute interaction.",
    },
    selected: {
      type: "boolean",
      defaultValue: false,
      description: "Si `true`, le toggle est activé (position sélectionnée).",
    },
    state: {
      type: "choice",
      options: ["default", "focused", "disabled"],
      defaultValue: "default",
      description: "État du toggle. Peut être `default`, `focused`, ou `disabled`.",
    },
    onChange: {
      type: "eventHandler",
      description: "Fonction appelée lors du changement de la case.",
      argTypes: [
        {
          name: "checked",
          type: "boolean",
        },
      ],
    },
  },
};

export default ToggleMeta;
