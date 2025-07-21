const DropDownMeta = {
  name: "DropDown",
  section: "2.🏷️ Forms",
  displayName: "Dropdown",
  description: "Dropdown unique combinant single/multi select et différents types visuels",
  importPath: "./plasmic-library/forms/DropDown",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/DropDown.png`,

  props: {
    label: {
      type: "string",
      defaultValue: "Choisir une option",
      description: "Texte affiché comme étiquette du dropdown.",
    },
    showLabel: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche ou masque l'étiquette du dropdown.",
    },
    type: {
      type: "choice",
      options: ["default", "icon", "avatar", "dot", "search"],
      defaultValue: "default",
      description: "Définit le style visuel des options.",
    },
    state: {
      type: "choice",
      options: ["placeholder", "hover", "default", "focused", "disabled"],
      defaultValue: "default",
      description: "État visuel du composant dropdown.",
    },
    multi: {
      type: "boolean",
      defaultValue: false,
      description: "Active la sélection multiple.",
    },
    value: {
      type: "object",
      description: "Valeur(s) sélectionnée(s) du dropdown.",
    },
    iconeUrl: {
      type: "imageUrl",
      description: "URL d'une icône globale affichée à côté du label.",
    },
    iconSize: {
      type: "object",
      description: "Dimensions de l'icône (ex: { width: '16', height: '16' }).",
      defaultValue: {
        width: "16",
        height: "16",
      },
    },
    options: {
      type: "array",
      description: "Liste des options du dropdown.",
      itemType: "object",
      itemProps: {
        key: {
          type: "string",
          description: "Identifiant unique de l’option.",
        },
        value: {
          type: "string",
          description: "Texte affiché pour l’option.",
        },
        icon: {
          type: "string",
          description: "Chemin de l’icône (type = icon).",
        },
        avatar: {
          type: "string",
          description: "Chemin de l’avatar (type = avatar).",
        },
        dotColor: {
          type: "string",
          description: "Couleur du point (type = dot).",
        },
      },
    },
    onChange: {
      type: "eventHandler",
      description: "Appelé lorsque la valeur du dropdown change.",
      argTypes: [
        {
          name: "selectedValue",
          type: "object",
        },
      ],
    },
    selectedOptionVar: {
      type: "function",
      description: "Mise à jour d'une variable Plasmic avec la sélection actuelle.",
      argTypes: [
        {
          name: "selectedValue",
          type: "object",
        },
      ],
    },
  },
};

export default DropDownMeta;
