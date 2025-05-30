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
   is_applied?: boolean;
   postal_code?: string;
   is_liked?: boolean;
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
            postal_code,
            state,
            title,
            location,
            created_at,
            company_name,
            logo_file,
            contract_type,
            working_time,
            salary,
            work_mode,
            sector_activity,
            is_last_minute,
            is_applied,
            is_liked,
         } = markerData;

         const today = new Date().toISOString().slice(0, 10); // "2025-05-27"
         const createdDate = created_at?.slice(0, 10); // extrait la date

         let markerState = 'base';

         if (is_last_minute) {
            markerState = 'last_minute';
         } else if (createdDate === today) {
            markerState = 'new';
         } else if (is_applied) {
            markerState = 'applied';
         } else if (is_liked) {
            markerState = 'liked';
         } else {
            markerState = 'base';
         }



         const markerElement = document.createElement('div');
         markerElement.className = `custom-marker ${markerState}`;
         const currentZoom = mapRef.current!.getZoom();
         const size = calculateMarkerSize(currentZoom);
         markerElement.style.width = `${size}px`;
         markerElement.style.height = `${size}px`;
         markerElement.style.backgroundSize = 'cover';

         const popupHtml = `
            
            ${markerState === 'applied' ? '<div class="applied-job">POSTULÉ</div>' : ''}
            ${markerState === 'new' ? '<div class="new-job">NOUVEAU</div>' : ''}       
            ${is_last_minute ? `
               <div class="state-job">
                  <img src="//idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/ph_clock-countdown-fill.svg" alt="Countdown Icon" />
                  <span class="state-job-title">LAST MINUTE</span>
               </div>
            ` : ''}

            ${state === 'liked' ? '<div class="popup-img">Favori</div>' : ''}



            <img class="company_logo" src="${logo_file}" alt="${title}" />

            <h3>${title || 'Titre non défini'}</h3>


            <div class="location">
               <img
                  src="//idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/ph_map-pin.svg"
                  class="w-4 h-4"
                  alt="Localisation"
               />
               <p>
                  ${location || 'Localisation non définie'}${postal_code ? ` (${postal_code.slice(0, 2)})` : ''} ${company_name ? `, ${company_name}` : ''}
               </p>
            </div>





            <div class="popup-info">
               <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_briefcase.svg" > ${sector_activity || 'N/A'}</div>
               <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_file-text.svg" >${contract_type || 'N/A'}</div>
               <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_clock.svg"> ${working_time || 'N/A'}</div>
               <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_coins-light.svg">${salary || 'N/A'}</div>
               <div><img src="https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img//ph_office-chair.svg"> ${work_mode || 'N/A'}</div>
            </div>


         `;



         const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);
         const marker = new mapboxgl.Marker({ element: markerElement })
            .setLngLat([longitude, latitude])
            .setPopup(popup)
            .addTo(mapRef.current!);

         // ✅ Ajoute cette partie juste après
         popup.on('open', () => {
            const popupContent = document.querySelector('.mapboxgl-popup-content');
            if (popupContent) {
               if (is_last_minute) {
                  popupContent.classList.add('last-minute-border');
               }
               if (markerState === 'new' && !is_last_minute) {
                  popupContent.classList.add('border-new');
               }
               if (is_applied) {
                  popupContent.classList.add('applied-border');
               }
               if (is_liked) {
                  popupContent.classList.add('liked-border');
               }
            }
         });


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
               background-image: url('https://idwomihieftgogbgivic.supabase.co/storage/v1/object/public/img/Marker/cartes-et-drapeaux.webp');
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
               padding: 30px 16px;
               display: flex;
               flex-direction: column;
               gap: 8px;
               z-index: 9999;
               overflow: hidden;
            }

            .mapboxgl-popup-content.last-minute-border::before {
               content: '';
               position: absolute;
               inset: 0;
               border-radius: 16px;
               padding: 2px;
               background: linear-gradient(180deg, #F6165B 0%, #F36320 63.5%);
               -webkit-mask:
                  linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
               -webkit-mask-composite: xor;
               mask-composite: exclude;
               z-index: -1;
            }

           .mapboxgl-popup-content.last-minute-border {
               position: relative;
               border-radius: 16px;
               background: #fff;
               z-index: 0;
            }

            .mapboxgl-popup-content.border-new {
               position: relative;
               border-radius: 16px;
               background: #fff;
               z-index: 0;
            }

            .mapboxgl-popup-content.border-new::before {
               content: '';
               position: absolute;
               inset: 0;
               border-radius: 16px;
               padding: 2px;
               background: #BAFE68;
               -webkit-mask:
                  linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
               -webkit-mask-composite: xor;
               mask-composite: exclude;
               z-index: -1;
            }

            .mapboxgl-popup-content.applied-border {
               position: relative;
               border-radius: 16px;
               background: #fff;
               z-index: 0;
            }

            .mapboxgl-popup-content.applied-border::before {
               content: '';
               position: absolute;
               inset: 0;
               border-radius: 16px;
               padding: 2px;
               background: #002400;
               -webkit-mask:
                  linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
               -webkit-mask-composite: xor;
               mask-composite: exclude;
               z-index: -1;
            }

            .mapboxgl-popup-content.liked-border {
               position: relative;
               border-radius: 16px;
               background: #fff;
               z-index: 0;
            }

            .mapboxgl-popup-content.liked-border::before {
               content: '';
               position: absolute;
               inset: 0;
               border-radius: 16px;
               padding: 2px;
               background: #FF4D84;
               -webkit-mask:
                  linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
               -webkit-mask-composite: xor;
               mask-composite: exclude;
               z-index: -1;
            }

            





            .mapboxgl-popup-close-button {
               display: none; 
            }




            
            .location {
               display: flex;
               align-items: center;
               justify-content: flex-start;
            }









            .state-job {
               position: absolute;
               top: 0;
               left: 0;
               display: flex;
               gap: 10px;
               flex-direction: row;
               justify-content: center;
               align-items: center; 
               background: linear-gradient(180deg, #F6165B 0%, #F36320 63.5%);
               border-radius: 16px 0px 8px;
               padding: 4px 12px 4px 8px;
               color: #ffffff;
            }

            .state-job-title {
               font-weight: normal;
               font-family: 'DM Sans';
               font-size: 14px
            }

            .mapboxgl-popup-content h3 {
               line-height: 1.2;
               font-size: 18px;
               font-weight: bold;
               color: #333;
               width: 70%;
            }
            
            .mapboxgl-popup-content p {
               font-size: 14px;
            }

            .mapboxgl-popup-content a {
               color:rgb(0, 0, 0);
               text-decoration: none;
               font-weight: bold;
            }
            



            .company_logo {
               width: 100px!important;
               border-radius: 8px;
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

            applied-job {
               position: absolute;
               top: 0;
               left: 0;
               display: flex;
               align-items: center; 
               background: #002400;
               border-radius: 16px 0px 8px;
               padding: 8px 12px;
               color:rgb(255, 255, 255);
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