// pages/auth/callback.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        console.error("Erreur de session ou non authentifié :", error?.message);
        router.replace("/login");
        return;
      }

      console.log("Session récupérée :", session);
      router.replace("/");
    };

    checkSession();
  }, [router]);

  return <p>Connexion en cours...</p>;
}
