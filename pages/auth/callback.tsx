import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export default function CallbackPage() {
  const router = useRouter();

useEffect(() => {
  const checkSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      });

      router.replace("/");
    } else {
      router.replace("/login");
    }
  };

  checkSession();
}, []);

  return <p>Connexion en cours...</p>;
}
