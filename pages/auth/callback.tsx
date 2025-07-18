import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase"; // attention, bien le client "browser"

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const completeLogin = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erreur récupération session:", error);
        router.replace("/login");
        return;
      }

      if (session) {
        // 🔐 Force un cookie propre
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
        router.replace("/");
      } else {
        router.replace("/login");
      }
    };

    completeLogin();
  }, []);

  return <p>Connexion en cours...</p>;
}
