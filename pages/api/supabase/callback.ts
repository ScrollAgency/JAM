// pages/api/supabase/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from '@/utils/supabase/api'
import { parse } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res)
  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  // Vérifie le code_verifier (PKCE)
  const cookies = parse(req.headers.cookie || '')
  const codeVerifier = cookies['sb-idwomihieftgogbgivic-auth-token-code-verifier']?.replace(/^"|"$/g, '')

  if (!code || !codeVerifier) {
    console.error('❌ Code ou code_verifier manquant')
    return res.redirect(307, '/auth/auth-code-error')
  }

  try {
    // Fait l’échange du code OAuth avec Supabase (déclenche la pose de cookies)
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('❌ Supabase exchange error:', error)
      return res.redirect(307, '/auth/auth-code-error')
    }

    // ✅ Redirige vers une page temporaire qui effectuera la redirection finale en frontend
    return res.redirect(307, `/auth/finishing-login?next=${encodeURIComponent(next)}`)
  } catch (err) {
    console.error('❌ Erreur inattendue:', err)
    return res.redirect(307, '/auth/auth-code-error')
  }
}
