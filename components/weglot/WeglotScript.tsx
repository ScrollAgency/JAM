'use client';

import { useEffect } from 'react';

export default function WeglotScript() {
  useEffect(() => {
    const allowedPaths = [
      '/',
      '/login',
      '/register',
      '/register-candidat',
      '/register-company',
    ];
    if (typeof window !== 'undefined' && allowedPaths.includes(window.location.pathname)) {
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
      };
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
