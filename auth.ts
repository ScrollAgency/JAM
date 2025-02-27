import { createClient } from '@supabase/supabase-js';

const supabaseUrl1 = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl1, supabaseAnonKey);

export const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin, // Redirection après connexion
        },
    });

    if (error) {
        console.error('Erreur de connexion:', error.message);
    }
};
