const CheckBoxMeta = {
  name: "CheckBox",
  section: "2.🏷️ Forms",
  displayName: "CheckBox",
  description: "Checkbox",
  importPath: "./plasmic-library/forms/CheckBox",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/CheckBox.png`,

  props: {
    label: {
      type: "string",
      defaultValue: "Checkbox label",
    },
    labelClass: {
      type: "class",
    },
    checkbox: {
      type: "boolean",
      defaultValue: false,
    },
    type: {
      type: "choice",
      defaultValue: "Checkbox",
      options: ["Checkbox", "Check circle"],
      required: false,
    },
    borderColor: {
      type: "color",
      defaultValue: "grey",
    },
    bgColor: {
      type: "color",
      defaultValue: "green",
    },
    checked: "boolean",
    disabled: "boolean",

    // show / hide
    showLabel: {
      type: "boolean",
      defaultValue: true,
    },

    // Events handlers
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

   // States
  states: {
    checkbox: {
      type: 'writable',
      variableType: 'boolean',
      valueProp: 'checkbox',
      onChangeProp: 'onChange'
    },
  },
};

export default CheckBoxMeta;
