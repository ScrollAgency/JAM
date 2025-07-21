const MapBoxMeta = {
    name: "MapBox",
    section: "3.🌍 Géoloc",
    displayName: "MapBox",
    description: "Magnifique carte MapBox",
    importPath: "./plasmic-library/geolocalisation/MapBox",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_PROJECT_URL}/library/MapBox.png`,

    props: {
        mapStyle: "string",
        latitude: "number",
        longitude: "number",
        iconUrl: "imageUrl",
        searchAddress: "string",
        zoom: "number",
        businesses: {
            type: "object",
            defaultValue: [],
        },
    },
}

export default MapBoxMeta;
