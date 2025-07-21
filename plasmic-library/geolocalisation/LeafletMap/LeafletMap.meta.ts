const LeafletMapMeta = {
  name: "LeafletMap",
  section: "3.🌍 Géoloc",
  displayName: "Leaflet Map",
  description: "Carte OpenStreetMap avec Leaflet",
  importPath: "./plasmic-library/geolocalisation/LeafletMap",
  thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/LeafletMap.png`,

  props: {
    mode: {
      type: "choice",
      options: ["user", "commerce"],
      defaultValue: "user",
      description: "Type de localisation",
    },
    lat: {
      type: "number",
      defaultValue: 48.8584,
      description: "Latitude (pour commerce)",
    },
    lon: {
      type: "number",
      defaultValue: 2.2945,
      description: "Longitude (pour commerce)",
    },
    zoomMap: {
      type: "number",
      defaultValue: 13,
      description: "Niveau de zoom",
    },
    heightMap: {
      type: "string",
      defaultValue: "400px",
      description: "Hauteur de la carte",
    },
    widthMap: {
      type: "string",
      defaultValue: "100%",
      description: "Largeur de la carte",
    },
    markerIconUrl: {
    type: "string",
    defaultValue: "/images/leaflet/marker-icon.png",
    description: "URL de l'icône du marqueur",
  },
  markerShadowUrl: {
    type: "string",
    defaultValue: "/images/leaflet/marker-shadow.png",
    description: "URL de l'ombre du marqueur",
  },
  },
};

export default LeafletMapMeta;
