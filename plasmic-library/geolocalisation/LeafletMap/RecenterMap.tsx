"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function RecenterMap({ center, zoom }: { center: [number, number]; zoom?: number }) {
  const map = useMap();

  useEffect(() => {
    if (!center) return;

    console.log("RecenterMap: recentrage vers", center, "zoom", zoom);

    map.setView(center, zoom ?? map.getZoom(), { animate: true });

    // Pas forcément utile de forcer invalidateSize sauf si la carte est dans un conteneur caché ou resizable
    // map.invalidateSize();

  }, [center, zoom, map]);

  return null;
}
