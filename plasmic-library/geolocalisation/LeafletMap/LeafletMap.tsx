"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const Tooltip = dynamic(() => import("react-leaflet").then((mod) => mod.Tooltip), { ssr: false });
const RecenterMap = dynamic(() => import("./RecenterMap"), { ssr: false });

export interface LeafletMapProps {
  mode: "user" | "commerce";
  lat?: number;
  lon?: number;
  zoomMap?: number;
  heightMap?: string;
  widthMap?: string;
  markerIconUrl?: string;
  markerShadowUrl?: string;
}

function LeafletMapInner(props: LeafletMapProps, ref: React.Ref<HTMLDivElement>) {
  const {
    mode,
    lat,
    lon,
    zoomMap = 13,
    heightMap = "400px",
    widthMap = "100%",
    markerIconUrl = "/marker-icon-green.png",
    markerShadowUrl = "/marker-shadow.png",
  } = props;

  const [L, setL] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([48.8566, 2.3522]);
  const [mapZoom, setMapZoom] = useState(zoomMap);

  useEffect(() => {
    import("leaflet").then((leaflet) => setL(leaflet.default));
  }, []);

  useEffect(() => {
    if (mode === "commerce" && lat !== undefined && lon !== undefined) {
      setMapCenter([lat, lon]);
    } else if (mode === "user" && (lat === undefined || lon === undefined) && typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setMapCenter([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => console.error("Erreur géoloc", err),
        { enableHighAccuracy: true }
      );
    } else if (mode === "user" && lat !== undefined && lon !== undefined) {
      setMapCenter([lat, lon]);
    }
  }, [mode, lat, lon]);

  const [merchantMarkers, setMerchantMarkers] = useState<
    { lat: number; lon: number; merchant_id?: number; address?: string; city?: string }[]
  >([]);

  useEffect(() => {
    const fetchNearby = async () => {
      const res = await fetch("/api/supabase/merchants-nearby", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lat: mapCenter[0], lon: mapCenter[1] }),
      });

      const data = await res.json();
      console.log("Data reçue de l'API :", data);
      setMerchantMarkers(data);
    };

    if (mapCenter) {
      fetchNearby();
    }
  }, [mapCenter]);

  useEffect(() => {
    setMapZoom(zoomMap);
  }, [zoomMap]);

  if (!L) return <p>Chargement de Leaflet…</p>;

  const userIcon = L.icon({
    iconUrl: "/marker-icon-blue.png",
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const merchantIcon = L.icon({
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  if (!mapCenter) return <p>Chargement de la carte…</p>;

  return (
    <div ref={ref} style={{ width: widthMap, height: heightMap }}>
      <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <RecenterMap center={mapCenter} zoom={mapZoom} />
        
        {/* Marker position utilisateur avec Popup */}
        <Marker position={mapCenter} icon={userIcon}>
          <Popup>Vous êtes ici</Popup>
        </Marker>
        
        {/* Markers commerçants avec Tooltip */}
        {merchantMarkers.map((merchant, index) => (
          <Marker key={index} position={[merchant.lat, merchant.lon]} icon={merchantIcon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
              {merchant.address ? merchant.address : "Adresse inconnue"}
              {merchant.city ? `, ${merchant.city}` : ""}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const LeafletMap = React.forwardRef(LeafletMapInner);
export default LeafletMap;
