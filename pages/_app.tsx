import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

// Import the CSS required for SupabaseUppyUploader globally
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleRouteChangeStart = () => {
            setIsNavigating(true);
        };
        
        const handleRouteChange = () => {
            // Uniquement recharger la page si ce n'est pas déjà en cours de navigation
            if (!isNavigating) {
                // N'utilisez PAS router.replace ici, c'est ce qui cause la boucle infinie
                setIsNavigating(false);
            }
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router, isNavigating]);

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return <Component {...pageProps} />;
}

export default MyApp;