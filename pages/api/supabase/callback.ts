import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createPagesServerClient({ req, res })

  const { data: { session }, error } = await supabase.auth.getSession()

  if (!session || error) {
    console.error("Erreur session :", error)
    return res.status(401).json({ error: "Non authentifié" })
  }

  // ✅ Cookie est maintenant présent côté serveur
  res.writeHead(302, { Location: '/' })
  res.end()
}
