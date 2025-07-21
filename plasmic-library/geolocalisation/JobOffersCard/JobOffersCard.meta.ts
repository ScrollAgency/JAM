const JobOffersCardMeta = {
  name: "JobOffersCard",
  section: "3.🌍 Géoloc",
  displayName: "Job Offers Card",
  description: "Carte affichant une offre d'emploi publiée par un recruteur",
  importPath: "./plasmic-library/geolocalisation/JobOffersCard",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/JobOffersCard.png`,

  props: {
    status: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "boosted", "archived", "new"],
      required: false,
    },
    title: "string",
    location: "string",
    publishDate: {
      type: "string",
      required: false,
    },
    contractDuration: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    contractType: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    immediateStart: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    workingHours: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    salary: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    remotePercentage: {
      type: "object",
      fields: {
        icon: {
          type: "imageUrl",
          required: false,
        },
        text: "string",
      },
      required: false,
    },
    applicationCount: {
      type: "number",
      required: false,
    },
    headerSlot: {
      type: "slot",
      defaultValue: null,
      description: "Contenu personnalisable en haut de la carte",
    },
    contentSlot: {
      type: "slot",
      defaultValue: null,
      description: "Contenu personnalisable au milieu de la carte",
    },
    footerSlot: {
      type: "slot",
      defaultValue: null, 
      description: "Contenu personnalisable en bas de la carte",
    },
    className: "string",
    customIcons: {
      type: "object",
      defaultValue: {},
      fields: {
        location: {
          type: "imageUrl",
          required: false,
          description: "Icône de localisation. Si vide, l'icône par défaut sera affichée. Si null, aucune icône ne sera affichée."
        },
        delete: {
          type: "imageUrl",
          required: false,
        },
        edit: {
          type: "imageUrl",
          required: false,
        },
      },
    },
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur la carte",
      argTypes: [
        {
          name: "event",
          type: "object",
        },
      ],
    },
    onBoostClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton boost",
      argTypes: [],
    },
    onDeleteClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton supprimer",
      argTypes: [],
    },
    onEditClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton éditer",
      argTypes: [],
    },
    formMethod: {
      type: "string",
      defaultValue: "post",
      required: false,
      description: "Méthode utilisée pour le formulaire (get/post)",
    },
    formAction: {
      type: "string",
      defaultValue: "#",
      required: false,
      description: "URL d'action du formulaire",
    },
    formId: {
      type: "string",
      required: false,
      description: "ID du formulaire",
    },
    onSubmit: {
      type: "eventHandler",
      description: "Fonction appelée lors de la soumission du formulaire",
      argTypes: [
        {
          name: "event",
          type: "object",
        },
      ],
    },
  },
};

export default JobOffersCardMeta; 