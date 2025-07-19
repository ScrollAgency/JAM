import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from '@/utils/supabase/api'
import { parse } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res)

  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  const protocol =
    req.headers['x-forwarded-proto']?.toString() ||
    (process.env.NODE_ENV === 'development' ? 'http' : 'https')
  const host = req.headers.host || 'localhost:3000'
  const origin = `${protocol}://${host}`

  if (!code) {
    console.error('❌ Aucun code fourni dans la requête.')
    return res.redirect(307, `${origin}/auth/auth-code-error`)
  }

  try {
    console.log('➡️ Auth code reçu:', code)

    const rawCookies = req.headers.cookie || ''
    const parsedCookies = parse(rawCookies)

    const codeVerifier = Object.entries(parsedCookies).find(([k]) =>
      k.includes('code-verifier')
    )?.[1]

    if (!codeVerifier) {
      console.error('❌ Code verifier manquant dans les cookies.')
      return res.redirect(307, `${origin}/auth/auth-code-error`)
    }

    console.log('🎯 Code verifier trouvé:', codeVerifier)

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('❌ Erreur Supabase exchangeCodeForSession:', error)
      return res.redirect(307, `${origin}/auth/auth-code-error`)
    }

    console.log('✅ Authentification réussie. Redirection vers:', `${origin}${next}`)
    return res.redirect(307, `${origin}${next}`)
  } catch (err: any) {
    console.error('❌ Erreur inattendue pendant le traitement du callback:', err)

    if (res.headersSent) {
      console.error('⚠️ Les headers ont déjà été envoyés ! Impossible de rediriger.')
      return
    }

    return res.redirect(307, `${origin}/auth/auth-code-error`)
  }
}
