import React from "react";
import { supabase } from "../lib/supabaseClient"; // Assure-toi que le chemin est correct

const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/home`, // Assure-toi que cet URI est bien enregistré dans Google Cloud
                },
            });

            if (error) {
                console.error("Erreur de connexion :", error.message);
            }
        } catch (err) {
            console.error("Erreur inattendue :", err);
        }
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
        >
            Se connecter avec Google
        </button>
    );
};

export default GoogleLoginButton;
