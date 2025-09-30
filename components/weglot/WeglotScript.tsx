'use client';

import { useEffect } from 'react';

export default function WeglotScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.weglot.com/weglot.min.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Weglot.initialize({
        api_key: 'wg_7a994a95d8a52ee847d1d76f13c919c67',
        originalLanguage: 'fr',
        destinationLanguages: ['en', 'es'],
        autoSwitch: false,
      });

      // Attendre que le switcher Weglot soit présent dans le DOM
      const interval = setInterval(() => {
        const weglotSwitcher = document.querySelector('.weglot-container.wg-default');
        const mobileTranslate = document.querySelector('.mobile-translate');

        if (weglotSwitcher) {
          // Déplace dans .mobile-translate si présent
          if (mobileTranslate) {
            mobileTranslate.appendChild(weglotSwitcher);
          }

          // Applique le style pour top-right
          const switcherEl = weglotSwitcher as HTMLElement;
          switcherEl.style.position = 'fixed';
          switcherEl.style.top = '20px';
          switcherEl.style.right = '20px';
          switcherEl.style.left = 'auto';
          switcherEl.style.bottom = 'auto';
          switcherEl.style.width = 'auto';
          switcherEl.style.zIndex = '99999';

          clearInterval(interval); // stop l'attente
          console.log('✅ Weglot déplacé et stylisé en haut à droite !');
        }
      }, 500);
    };

    document.head.appendChild(script);
  }, []);

  return null;
}