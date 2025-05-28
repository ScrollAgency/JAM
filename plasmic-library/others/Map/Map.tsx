import React, { useEffect, useRef, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.module.css';

interface MarkerData {
   latitude: number;
   longitude: number;
   state?: string;
   title?: string;
   location?: string;
   logo_file?: string;
   company_name?: string;
   website?: string;
   contract_type?: string;
   start_date?: string;
   working_time?: number;
   created_at?: string;
   salary?: number;
   work_mode?: string;
   annonce?: boolean;
   sector_activity?: string;
   is_last_minute?: boolean;
}

interface MapboxProps {
   mapStyle?: string;
   latitude?: number;
   longitude?: number;
   zoom?: number;
   markers?: MarkerData[];
   className?: string;
}

const Mapbox: React.FC<MapboxProps> = ({
   mapStyle = 'mapbox://styles/mapbox/streets-v11',
   latitude = 48.8566,
   longitude = 2.3522,
   zoom = 9,
   markers = [],
   className = '',
}) => {
   const mapContainerRef = useRef<HTMLDivElement | null>(null);
   const mapRef = useRef<mapboxgl.Map | null>(null);
   const markersRef = useRef<Record<string, mapboxgl.Marker>>({});
   const [mapLoaded, setMapLoaded] = useState(false);

   const calculateMarkerSize = useCallback((zoom: number) => {
      const minSize = 20;
      const maxSize = 40;
      const minZoom = 5;
      const maxZoom = 15;
      const clampedZoom = Math.min(Math.max(zoom, minZoom), maxZoom);
      return minSize + ((clampedZoom - minZoom) / (maxZoom - minZoom)) * (maxSize - minSize);
   }, []);





   // 1. Créer la carte 
   useEffect(() => {
      if (!mapContainerRef.current || mapRef.current || !process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) return;

      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

      const map = new mapboxgl.Map({
         container: mapContainerRef.current,
         style: mapStyle,
         center: [longitude, latitude],
         zoom,
         projection: { name: 'mercator' },
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.on('load', () => {
         setMapLoaded(true);

         map.on('zoom', () => {
            const currentZoom = map.getZoom();
            const size = calculateMarkerSize(currentZoom);
            document.querySelectorAll('.custom-marker').forEach((marker) => {
               const el = marker as HTMLElement;
               el.style.width = `${size}px`;
               el.style.height = `${size}px`;
            });
         });
      });

      mapRef.current = map;

      return () => {
         map.remove();
         mapRef.current = null;
      };
   }, [mapStyle, calculateMarkerSize]);





   // 2. Recentrer la carte si lat/lng changent
   useEffect(() => {
      if (mapRef.current && mapLoaded) {
         mapRef.current.flyTo({ center: [longitude, latitude], essential: true });
      }
   }, [latitude, longitude, mapLoaded]);





   // 3. Affichage des marqueurs
   useEffect(() => {
      if (!mapRef.current || !mapLoaded || markers.length === 0) return;

      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};

      markers.forEach((markerData) => {
         const {
            latitude,
            longitude,
            state,
            title,
            location,
            created_at,
            company_name,
            logo_file,
            website,
            contract_type,
            working_time,
            salary,
            work_mode,
            sector_activity,
            is_last_minute,
         } = markerData;

         const today = new Date().toISOString().slice(0, 10); // "2025-05-27"
         const createdDate = markerData.created_at?.slice(0, 10); // extrait la date

         let markerState = 'base';

         if (markerData.is_last_minute) {
            markerState = 'last_minute';
         } else if (createdDate === today) {
            markerState = 'new';
         }


         const markerElement = document.createElement('div');
         markerElement.className = `custom-marker ${markerState}`;
         const currentZoom = mapRef.current!.getZoom();
         const size = calculateMarkerSize(currentZoom);
         markerElement.style.width = `${size}px`;
         markerElement.style.height = `${size}px`;
         markerElement.style.backgroundSize = 'cover';

         const popupHtml = `
        <div class="popup-content">
          <div class="popup-header">
            ${markerState === 'new' ? '<div class="new-job">Nouveau</div>' : ''}
            ${is_last_minute ? `
               <div class="popup-img">
               <img src="//idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/ph_clock-countdown-fill.svg" alt="Countdown Icon" />
               LAST MINUTE
                  </div>
                  ` : ''}

            ${state === 'liked' ? '<div class="popup-img">Favori</div>' : ''}
            ${state === 'applied'
               ? `<div class="popup-header w-1/3 pl-1 p-1.2 h-10 rounded-br-lg color-white absolute top-0 left-0 items-center popup-img flex bg-gradient-to-b from-[#FF4D84] to-[#F36320] align-center justify-content-center gap-10px"><img class="w-1/8" src="//idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/ph_clock-countdown-fill.svg"/><p class="text-[#ffffff]">POSTULÉ</p></div>`
               : ''
            }

            <img class="business_logo" src="${logo_file}" alt="${title}" />

            <h3>${title || 'Titre non défini'}</h3>
          </div>

         <div class="flex bg-[#ffffff]">

            <img src="//idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/ph_map-pin.svg"/>

            <p class="w-full">${location || 'Localisation non définie'}${company_name ? `, ${company_name}` : ''}</p>

            <a href="${website || '#'}" target="_blank">${website ? website.replace(/^https?:\/\//, '') : 'N/A'}</a>

         </div>

         <div class="popup-info">
            <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_briefcase.svg" > ${sector_activity || 'N/A'}</div>
            <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_file-text.svg" >${contract_type || 'N/A'}</div>
            <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_clock.svg"> ${working_time || 'N/A'}</div>
            <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_coins-light.svg">${salary || 'N/A'}</div>
            <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_office-chair.svg"> ${work_mode || 'N/A'}</div>
         </div>
        </div>`;

         const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

         const marker = new mapboxgl.Marker({ element: markerElement })
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(mapRef.current!);

         markersRef.current[title || `${latitude}-${longitude}`] = marker;
      });
   }, [markers, mapLoaded, calculateMarkerSize]);

   return (
      <>
         <style>
            {`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
          font-family: 'DM Sans', sans-serif;
        }
        .custom-marker {
            border: none;
            cursor: pointer;
            transition: width 0.3s ease, height 0.3s ease;
          }
          .custom-marker:hover {
            transform: scale(1.8);
          }
          .custom-marker.base {
            background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/State=PinApplied,%20ShowSalary=False.svg');
          }
          .custom-marker.liked {
            background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/State=PinLiked,%20ShowSalary=False.svg');
          }
          .custom-marker.new {
            background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/State=PinNew,%20ShowSalary=False.svg');
          }
          .custom-marker.last_minute {
            background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/State=PinLastMin,%20ShowSalary=False.svg');
          }
          .custom-marker.applied {
            background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/State=PinApplied,%20ShowSalary=False.svg');
          }
          .mapboxgl-popup-content {
            width: 350px;
            font-family: 'Arial', sans-serif;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            padding: 16px;
            position: relative;
            line-height: 0.5;
            z-index: 9999;
            border: 1px solid #FF4D84;
            overflow: hidden;
          }
          .mapboxgl-popup-close-button {
            display: none;
          }
          .mapboxgl-popup-content .state {
            background: #FF4D84;
            position: absolute;
            top: -4px;
            left: 0px;
            color: #fff;
            padding: 8px 8px;
            border-radius: 0 0 12px 0;
            font-size: 12px;

          }
          .mapboxgl-popup-img{
            display: flex;
            background: #000000;
          }

.popup-img {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center; 
  
  background: linear-gradient(180deg, #F6165B 0%, #F36320 63.5%);
  border-radius: 16px 0px 8px;
  padding: 8px 12px;
  color: #ffffff;
  margin-bottom: 10px;
}



            

          .mapboxgl-popup-content img {
            width: 10%;
            height: 10%;
            border-radius: 8px;
          }
          .mapboxgl-popup-content h3 {
            line-height: 1.2;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
            width: 70%;
          }
          .mapboxgl-popup-content p {
            font-size: 14px;
            margin: 4px 0;
          }
          .mapboxgl-popup-content a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }
          .mapboxgl-popup-content a:hover {
            text-decoration: underline;
          }
          .popup-badge {
            display: inline-block;
            background: linear-gradient(90deg, #ff6b6b, #ff8e53);
            color: white;
            font-size: 12px;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 8px;
            margin-bottom: 10px;
          }
          .popup-header {
            align-items: center;
            gap: 13px!important;
            height: 30px;
            text-align: center;
          }
          .popup-header img {
            width: 20px;
            height: 20px;
            object-fit: fit;
          }
          .popup-header h3 {
            position: absolute;
            top: 50px;
            left: 50%
            font-size: 20px;
            font-weight: bold;
            width: 70%;
          }
            .business_logo {
            width: 100px!important;
            border-radius: 8px;
            position: absolute;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
          }
          .popup-info {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            padding-left:2.5%;
            padding-right:2.5%;
          }
          .popup-info div {
            background: #F4F4F4;
            padding: 6px 10px;
            border-radius: 16px;
            font-size: 12px;
            font-weight: bold;
            color: #000;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .popup-info div img {
            width: 14px;
            height: 14px;
          }
            .mapboxgl-ctrl-bottom-right {
            display: none;
          }
            .adress {
            background: #ffffff!important;
            padding-left:5%;
            padding-right:5%;
            color: #000000!important;
            font-decoration: none!important;
            width: 100%;
        }
            .adress a, .adress p {
            color: #000000!important;
            text-decoration: none!important;
            transition: 0.3s;
            font-weight: bold;
            font-size: 12px;
            width: 100%;
            display: inline-block;
            line-height: 1;
        }
            .adress a:hover {
            text-decoration: underline!important;
            transition: 0.3s;
        }
            .new-job {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center; 
  
           background: #BAFE68;
             border-radius: 16px 0px 8px;
            padding: 8px 12px;
            color: #000000;
            margin-bottom: 10px;
}
        `}
         </style>
         <div
            ref={mapContainerRef}
            className={`mapbox-map ${className}`}
            style={{ width: '100%', height: '100%', borderRadius: '16px', position: 'relative' }}
         />
      </>
   );
};

export default Mapbox;




