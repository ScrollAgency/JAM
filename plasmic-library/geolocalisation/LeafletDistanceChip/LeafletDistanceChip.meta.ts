const LeafletDistanceChipMeta = {
  name: "LeafletDistanceChip",
  section: "3.🌍 Géoloc",
  displayName: "Distance Chip",
  description: "Affiche la distance entre 2 coordonnées GPS en km",
  importPath: "./plasmic-library/geolocalisation/LeafletDistanceChip",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/LeafletDistanceChip.png`,

  props: {
    lat: {
      type: "number",
      description: "Latitude utilisateur",
      defaultValue: 48.8566,
    },
    lon: {
      type: "number",
      description: "Longitude utilisateur",
      defaultValue: 2.3522,
    },
    merchantLat: {
      type: "number",
      description: "Latitude du commerçant",
      defaultValue: 48.8584,
    },
    merchantLon: {
      type: "number",
      description: "Longitude du commerçant",
      defaultValue: 2.2945,
    },
    maxDistanceKm: {
      type: "number",
      description: "Distance maximale affichée en km (sinon null)",
      defaultValue: 10,
    },
        className: {
      type: "class",
      displayName: "Classe CSS",
      description: "Classe CSS personnalisée pour styliser le composant",
    },
  },
};

export default LeafletDistanceChipMeta;
