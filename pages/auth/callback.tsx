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
      setTimeout(() => router.replace("/"), 300);
    } else {
      router.replace("/login");
    }
  };

  checkSession();
}, [router]);

  return <p>Connexion en cours...</p>;
}
