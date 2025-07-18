import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

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

      // Session OK, redirection directe
      router.replace("/");
    };

    completeLogin();
  }, [router]);

  return <p>Connexion en cours...</p>;
}
