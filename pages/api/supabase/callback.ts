// app/api/supabase/callback/route.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { parse } from 'cookie'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {
          // rien ici car on utilise `response.cookies.set` plus bas
        },
      },
    }
  )

  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') || '/'

  // Extraire le code_verifier
  const cookieHeader = request.headers.get('cookie') || ''
  const parsedCookies = parse(cookieHeader)
  const codeVerifier = parsedCookies['sb-idwomihieftgogbgivic-auth-token-code-verifier']?.replace(/^"|"$/g, '')

  if (!code || !codeVerifier) {
    return NextResponse.redirect('/auth/auth-code-error')
  }

  console.log('🎯 code_verifier:', codeVerifier)

  // Échange du code contre session
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error || !data?.session) {
    console.error('❌ Erreur échange code:', error)
    return NextResponse.redirect('/auth/auth-code-error')
  }

  const { access_token, refresh_token } = data.session

  const authTokenValue = encodeURIComponent(JSON.stringify({ access_token, refresh_token }))

  const response = NextResponse.redirect(new URL(next, request.url))

  response.cookies.set('sb-idwomihieftgogbgivic-auth-token', authTokenValue, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  })

  console.log('✅ Authentification réussie. Redirection vers:', next)
  return response
}
