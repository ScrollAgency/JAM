const InputComboSelectMeta = {
  name: "InputComboSelect",
  section: "2.🏷️ Forms",
  displayName: "Input-Select",
  description: "Champ combiné pour saisie ou sélection d'un nombre de 1 à 20",
  importPath: "./plasmic-library/forms/InputComboSelect",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/InputComboSelect.png`,

  props: {
    value: {
      type: "number",
      defaultValue: "",
    },
    onChange: {
      type: "eventHandler",
      argTypes: [],
    },
  },

   // States
   states: {
    value: {
      type: "writable",
      variableType: "number",
      valueProp: "value",
      onChangeProp: "onChange",
    },
  },
};

export default InputComboSelectMeta;
