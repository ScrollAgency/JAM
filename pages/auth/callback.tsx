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

      const authCookieName = Object.keys(Cookies.get()).find(
        name => name.startsWith("sb-") && name.endsWith("-auth-token")
      );

      if (authCookieName) {
        const authCookieValue = Cookies.get(authCookieName);

        if (authCookieValue) {
          // 🔁 Envoyer le cookie au backend pour qu'il le définisse en HttpOnly
          await fetch("/api/supabase/callback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: authCookieValue }),
          });
        }
      }

      router.replace("/");
    };

    completeLogin();
  }, []);

  return <p>Connexion en cours...</p>;
}
