const WebPushMeta = {
  name: "WebPush",
  section: "5.🌀 Interactions",
  displayName: "Web Push",
  description: "Activer les notifications push",
  importPath: "./plasmic-library/interactions/WebPush",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/WebPush.png`,

  props: {
    pushStatus: {
      type: "boolean",
      defaultValue: true,
      description: "Exécuter l'action ?",
    },
    userID: {
      type: "string",
    },
    onSubscription: {
        type: "eventHandler",
        argTypes: [
            {
            name: "subscription",
            type: "object",
            },
        ],
        description: "Callback exécutée avec la subscription Web Push",
    },
  },
};

export default WebPushMeta;
