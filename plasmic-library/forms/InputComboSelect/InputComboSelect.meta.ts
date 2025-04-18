const InputComboSelectMeta = {
  name: "InputComboSelect",
  section: "🔖 Jam",
  displayName: "Input + Combo Select",
  description: "Champ combiné pour saisie ou sélection d'un nombre de 1 à 20",
  thumbnailUrl: "https://static1.plasmic.app/insertables/modal.svg",
  props: {
    value: {
      type: "number",
      defaultValue: 1,
    },
    onChange: {
      type: "eventHandler",
    },
  },
  importPath: "./components/InputComboSelect/InputComboSelect",
};

export default InputComboSelectMeta;
