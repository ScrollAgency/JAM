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
        api_key: 'wg_d329a44473da57760d76b809239d58082',
        originalLanguage: 'fr',
        destinationLanguages: ['en', 'es'],
        autoSwitch: false,
      });
    };
    document.head.appendChild(script);
  }, []);

  return null;
}