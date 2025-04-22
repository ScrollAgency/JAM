"use client"; // Assure que ce fichier est exécuté uniquement côté client

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient();
