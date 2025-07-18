import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";
import Cookies from "js-cookie";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const completeLogin = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        console.error("Erreur récupération session:", error);
        router.replace("/login");
        return;
      }

      // 1. Récupère le cookie Supabase (clé dynamique)
      const authCookieName = Object.keys(Cookies.get()).find(
        name => name.startsWith("sb-") && name.endsWith("-auth-token")
      );

      if (authCookieName) {
        const authCookieValue = Cookies.get(authCookieName);

        // 2. Copie la valeur dans `persisted-auth`
        if (authCookieValue) {
          Cookies.set(`sb-${process.env.NEXT_PUBLIC_SUPABASE_ID}-auth-token`, authCookieValue, {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires: 1 / 24, // 1 heure
          });
        }

      router.replace("/");
    };

    completeLogin();
  }, []);

  return <p>Connexion en cours...</p>;
}
