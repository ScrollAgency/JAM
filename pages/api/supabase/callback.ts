// pages/api/supabase/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from '@/utils/supabase/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res)
  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  // Forcer https pour éviter les problèmes de reverse proxy
  const protocol = 'https'
  const host = req.headers.host || 'localhost:3000'
  const origin = `${protocol}://${host}`

  console.log('➡️ Auth code reçu:', code)

  if (!code) {
    console.error('❌ Code manquant dans la requête')
    return res.redirect(307, '/auth/auth-code-error')
  }

  try {
    // Échange le code contre une session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('Set-Cookie headers:', res.getHeader('set-cookie'))

    if (error) {
      console.error('❌ Supabase exchange error:', error)
      return res.redirect(307, '/auth/auth-code-error')
    }

    console.log(`✅ Authentification réussie. Redirection vers: ${next}`)

    // Redirection relative (plus sûre)
    res.writeHead(307, { Location: next })
    return res.end()
  } catch (err) {
    console.error('❌ Erreur inattendue:', err)
    return res.redirect(307, '/auth/auth-code-error')
  }
}
