const CalendarShadCnMeta = {
  name: "CalendarShadCn",
  section: "7.🧩 UI",
  displayName: "Calendar ShadCn",
  description: "Un calendrier ShadCn avec range de date",
  importPath: "./plasmic-library/ui/CalendarShadCn",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/CalendarShadCn.png`,

  props: {
    // Styles
    selectedClass: {
      type: "string",
      defaultValue: "bg-blue-600 text-white",
      description: "Classe Tailwind pour les jours sélectionnés",
    },
    rangeStartClass: {
      type: "string",
      defaultValue: "rounded-l-md bg-blue-700 text-white",
      description: "Classe Tailwind pour le début de plage",
    },
    rangeEndClass: {
      type: "string",
      defaultValue: "rounded-r-md bg-blue-700 text-white",
      description: "Classe Tailwind pour la fin de plage",
    },
    todayClass: {
      type: "string",
      defaultValue: "text-blue-600 border border-blue-600",
      description: "Classe Tailwind pour aujourd'hui",
    },
    disabledClass: {
      type: "string",
      defaultValue: "text-gray-400",
      description: "Classe Tailwind pour les dates désactivées",
    },

    monthCaptionClass: {
      type: "string",
      defaultValue: "flex-row flex-wrap content-center justify-normal items-normal w-[250px] text-center text-lg font-semibold",
      description: "Classe Tailwind appliquée au nom du mois",
    },
    navButtonClass: {
      type: "string",
      defaultValue: "text-blue-600 hover:text-blue-800",
      description: "Classe Tailwind pour les flèches de navigation",
    },

    // Values
    value: {
      type: "object",
      hidden: () => true,
      description: "Objet contenant start et end en string YYYY-MM-DD",
      defaultValue: {
        start: "2025-05-20",
        end: "2025-05-27",
      },
      propertyTypes: {
        start: "string",
        end: "string",
      },
    },
    showDefaultDate: {
      type: "boolean",
      defaultValue: false,
    },
    onDateChange: {
      type: "eventHandler",
      argTypes: [{ name: "range", type: "object" }],
      description: "Appelée quand l'utilisateur sélectionne une nouvelle plage de dates",
    },
    className: {
      type: "string",
      description: "Classe CSS supplémentaire pour personnaliser le style",
    },
  },
  states: {
    range: {
      type: "writable",
      variableType: "object",
      valueProp: "value",
      onChangeProp: "onDateChange",
    },
  },
};

export default CalendarShadCnMeta;
