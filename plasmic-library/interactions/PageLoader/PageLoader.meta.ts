const PageLoaderMeta = {
  name: "PageLoader",
  section: "5.🌀 Interactions",
  displayName: "Page Loader",
  description: "Déclenche une action au chargement de la page",
  importPath: "./plasmic-library/interactions/PageLoader",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/PageLoader.png`,

  props: {
    shouldRun: {
      type: "boolean",
      defaultValue: true,
      description: "Exécuter l'action ?",
    },
    onMount: {
      type: "eventHandler",
      description: "Action à exécuter au chargement",
      argTypes: [],
    },
  },
};

export default PageLoaderMeta;
