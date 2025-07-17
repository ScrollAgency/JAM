import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createPagesServerClient({ req, res })

  const fullUrl = `${process.env.NEXT_PUBLIC_PROJECT_URL}${req.url}`

  const { data, error } = await supabase.auth.exchangeCodeForSession(fullUrl)

  if (error || !data.session) {
    console.error("Erreur Supabase OAuth :", error?.message)
    return res.status(401).json({ error: "Échec de la connexion Google" })
  }

  console.log("Connexion réussie via Google :", data.session)

  res.redirect('/') // ou une autre page après login
}
