import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const completeLogin = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        console.error("Erreur session:", error);
        router.replace("/login");
        return;
      }

      // Créer un cookie miroir temporaire
      document.cookie = `persisted-auth=true; path=/; max-age=3600; SameSite=Lax; ${
        process.env.NODE_ENV === "production" ? "Secure;" : ""
      }`;

      router.replace("/");
    };

    completeLogin();
  }, []);

  return <p>Connexion en cours...</p>;
}
