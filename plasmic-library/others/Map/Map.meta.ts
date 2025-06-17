const MapBoxMeta = {
    section: "🔖 Jam",
    displayName: "MapBox",
    description: "Magnifique carte MapBox",
    thumbnailUrl: "https://plasmic-api.agence-scroll.com/mapbox.png",
    type: "component",
    name: "MapBox",
    props: {
        mapStyle: "string",
        latitude: "number",
        longitude: "number",
        iconUrl: "imageUrl",
        searchAddress: "string",
        zoom: "number",
        markers: {
            type: "object",
            defaultValue: [],
        },
        onPopupClick: {
            type: "eventHandler",
            argTypes: [{ name: "id", type: "string" }],
        },
        showLogoInPopup: {
            type: "boolean",
            defaultValue: true,
            description: "Affiche ou non le logo de l'entreprise dans la popup",
        },
    },
    importPath: "./components/others/MapBox/MapBox",
}
export default MapBoxMeta;