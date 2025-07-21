const SmartLoaderMeta = {
  name: "SmartLoader",
  section: "5.🌀 Interactions",
  displayName: "Smart Loader",
  description: "Déclenche jusqu'à 5 actions conditionnelles à l'initialisation",
  importPath: "./plasmic-library/interactions/SmartLoader",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/SmartLoader.png`,

  props: {
    shouldRun: {
      type: "boolean",
      defaultValue: true,
      description: "Exécuter les actions ?",
    },
    condition1: { type: "boolean", description: "Condition 1" },
    action1: { type: "eventHandler", argTypes: [], description: "Action 1" },
    condition2: { type: "boolean", description: "Condition 2" },
    action2: { type: "eventHandler", argTypes: [], description: "Action 2" },
    condition3: { type: "boolean", description: "Condition 3" },
    action3: { type: "eventHandler", argTypes: [], description: "Action 3" },
    condition4: { type: "boolean", description: "Condition 4" },
    action4: { type: "eventHandler", argTypes: [], description: "Action 4" },
    condition5: { type: "boolean", description: "Condition 5" },
    action5: { type: "eventHandler", argTypes: [], description: "Action 5" },
  },
};

export default SmartLoaderMeta;
