import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const loginPage = '/login'

const publicRoutes = [
  '/',
  '/plasmic-host',

  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/user-invite',
  '/reset-password/[recovery_token]',
  '/register',
  '/register-candidat',
  '/register-company',
  '/accueil-employeur',
  '/mentions-legales',
  '/cgu',

  '/auth/oauth-callback',
  '/auth/auth-code-error',
  '/auth/after-login-ok',

  '/first-install',
  '/plasmic-library',
  '/libellule',
  
  '/api/save-data',
  '/api/lib-ellule/update',
  '/api/lib-ellule/files',
  '/api/lib-ellule/listComponents',
  '/api/lib-ellule/generate-components',
  '/api/lib-ellule/save-infos',
  '/api/lib-ellule/get-infos',
]

const unauthorizedPage = '/'

type RequiredRole = 'admin' | 'user' | 'company'

const roleRestrictedRoutes: Array<{ pattern: string | RegExp; requiredRole: RequiredRole }> = [
  { pattern: /^\/candidatures-employeur\/[^/]+$/, requiredRole: 'company' },
  { pattern: '/recherche-candidat', requiredRole: 'company' },
  { pattern: '/parametres-employeur', requiredRole: 'company' },
  { pattern: '/parametres-abonnement', requiredRole: 'company' },

  { pattern: '/alertes', requiredRole: 'user' },
  { pattern: '/candidatures', requiredRole: 'user' },
  { pattern: '/annonces', requiredRole: 'user' },
  { pattern: '/parametres-candidat', requiredRole: 'user' },

  { pattern: '/user_admin', requiredRole: 'admin' },
  { pattern: '/offre_admin', requiredRole: 'admin' },
]

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/manifest.json") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/sw.js")
  ) {
    return NextResponse.next()
  }

  const supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            if (name === 'session_id' && isOldCookie(value)) {
              supabaseResponse.cookies.set(name, '', { maxAge: 0, path: '/' })
              continue
            }

            const cookieOptions = {
              path: '/',
              httpOnly: true,
              // secure: process.env.NODE_ENV === 'production',
              // sameSite: process.env.NODE_ENV === 'production' ? 'Lax' : 'None',
              secure: true,
              sameSite: 'Lax' as const,
              maxAge: 60 * 60,
              ...options,
            }

            request.cookies.set(name, value)
            supabaseResponse.cookies.set(name, value, cookieOptions)
          }
        }
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes('[recovery_token]')) {
      const regex = new RegExp(`^${route.replace('[recovery_token]', '(.*)')}$`)
      return regex.test(request.nextUrl.pathname)
    }
    return route === request.nextUrl.pathname
  })

  if (!isPublicRoute && !user) {
    return redirectWithCookies(request, supabaseResponse, loginPage)
  }

  if (!isPublicRoute && user) {
    const role = getUserRole(user)
    const requiredRole = getRequiredRoleForPath(pathname)
    if (requiredRole && role !== requiredRole) {
      return redirectWithCookies(request, supabaseResponse, unauthorizedPage)
    }
  }

  return supabaseResponse
}

function getRequiredRoleForPath(pathname: string): RequiredRole | null {
  for (const rule of roleRestrictedRoutes) {
    if (typeof rule.pattern === 'string') {
      if (rule.pattern === pathname) return rule.requiredRole
    } else {
      if (rule.pattern.test(pathname)) return rule.requiredRole
    }
  }
  return null
}

function getUserRole(user: any): RequiredRole | null {
  const rawRole = user?.user_metadata?.role ?? user?.user_metadata?.Role
  if (!rawRole || typeof rawRole !== 'string') return null
  const normalized = rawRole.trim().toLowerCase()
  if (normalized === 'admin' || normalized === 'user' || normalized === 'company') {
    return normalized
  }
  return null
}

function redirectWithCookies(request: NextRequest, from: NextResponse, toPathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = toPathname
  const res = NextResponse.redirect(url)
  for (const cookie of from.cookies.getAll()) {
    res.cookies.set(cookie)
  }
  return res
}

function base64UrlDecode(input: string): string {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=')
  return atob(padded)
}

function isOldCookie(cookieValue: string): boolean {
  try {
    const parts = cookieValue.split('.')
    if (parts.length !== 3) return true

    const payload = JSON.parse(base64UrlDecode(parts[1]))
    const now = Math.floor(Date.now() / 1000)
    return typeof payload?.exp === 'number' ? payload.exp < now : true
  } catch (e) {
    return true
  }
}
    
  export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  }