const JobCardMeta = {
  name: "JobCard",
  section: "3.🌍 Géoloc",
  displayName: "Job card",
  description: "Description de cette belle carte",
  importPath: "./plasmic-library/geolocalisation/JobCard",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/JobCard.png`,

  props: {
    state: {
      type: "choice",
      defaultValue: "default",
      options: ["default", "liked", "applied", "new", "lastMin"],
      required: false,
    },
    title: "string",
    className: "string",
    city: "string",
    companyName: "string",
    logo: "imageUrl",
    onClick: {
      type: "eventHandler",
      description: "Fonction appelée lors du clic sur le bouton.",
      argTypes: [
        {
          name: "event",
          type: "object",
        },
      ],
    },
    tags: {
      type: "object",
      defaultValue: [],
    },
    customIcons: {
      type: "object",
      defaultValue: {},
    },
  },
};

export default JobCardMeta;
