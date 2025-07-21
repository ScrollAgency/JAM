const SitexButtonMeta = {
  name: "SitexButton",
  section: "8.⚡ Others",
  displayName: "Button Sitex",
  description: "Button used in Sitex project",
  importPath: "./plasmic-library/buttons/SitexButton",
  thumbnailUrl: "https://static1.plasmic.app/insertables/button.svg",

  props: {
    label: "string",
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    destructive: "boolean",
    hierarchy: {
      type: "choice",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    size: {
      type: "choice",
      options: ["small", "large"],
      defaultValue: "large",
    },
    disabled: "boolean",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [
        {
          name: "VarInput",
          type: "string",
        },
      ],
    },
    className: {
      type: 'class',
      selectors: [
        {
          selector: ':hover',
          label: 'Hovered'
        },
        {
          selector: ':active',
          label: 'Pressed'
        },
        {
          selector: ':disabled',
          label: 'Disabled'
        }
      ]
    }
  },
};

export default SitexButtonMeta;
