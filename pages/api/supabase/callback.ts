// pages/api/supabase/callback.ts
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createPagesServerClient({ req, res });

  // Récupérer la session et forcer le cookie de session
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error || !session) {
    return res.status(401).json({ error: 'Non authentifié' });
  }

  // Redirection vers la page d'accueil après authentification
  res.writeHead(302, { Location: '/' });
  res.end();
}
