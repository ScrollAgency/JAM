// pages/api/supabase/callback.ts
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createPagesServerClient({ req, res })

  const { error } = await supabase.auth.exchangeCodeForSession(req.url!)

  if (error) {
    console.error("Erreur d'échange de code:", error.message)
    return res.status(401).json({ error: 'Échec de la connexion Google' })
  }

  console.log("✅ Connexion Google réussie, cookie créé")

  return res.redirect('/') // Redirige où tu veux
}
