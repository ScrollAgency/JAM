import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const loginPage = '/login'

const publicRoutes = [
  '/',
  '/accueil-employeur',
  '/plasmic-host',
  '/login',
  '/register-candidat',
  '/register-company',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/reset-password/[recovery_token]',
  '/first-install',
  '/plasmic-library',
  '/pages/api/supabase/callback',
  '/api/supabase/callback',
  '/auth/callback'
]

export async function middleware(request: NextRequest) {
  const response = NextResponse.next(); // 👈 On va se servir de celui-là

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            //if (name === 'session_id' && isOldCookie(value)) {
            if (name === 'session_id' && isOldCookie(value)) {
              response.cookies.set(name, '', { maxAge: 0, path: '/' });
              continue;
            }

            const cookieOptions = {
              path: '/',
              httpOnly: true,
              secure: true,
              sameSite: 'Lax',
              maxAge: 60 * 60,
              ...options,
            };

            response.cookies.set(name, value, cookieOptions);
          }
        }
      }
    }
  );

  // Déclenche la création éventuelle des cookies
  const { data: { user } } = await supabase.auth.getUser();

  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes('[recovery_token]')) {
      const regex = new RegExp(`^${route.replace('[recovery_token]', '(.*)')}$`);
      return regex.test(request.nextUrl.pathname);
    }
    return route === request.nextUrl.pathname;
  });

const persisted = request.cookies.get("persisted-auth")?.value;

if (!isPublicRoute && !user && (!persisted || isOldCookie(persisted))) {
  const url = request.nextUrl.clone();
  url.pathname = loginPage;
  return NextResponse.redirect(url);
}

  // Cookie de test
  response.cookies.set("middleware-test", "ok", {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 5,
  });

   console.log("📥 Cookies reçus :", request.cookies.getAll())
    console.log("📤 Cookies envoyés :", response.headers.get("set-cookie"))
  return response;
}

function isOldCookie(cookieValue: string): boolean {
  try {
    // Si c'est un tableau JSON (auth via OAuth comme Google)
    if (cookieValue.startsWith('["')) {
      const [access_token] = JSON.parse(cookieValue);
      return isJwtExpired(access_token);
    }

    // Sinon, cookieValue est un JWT classique
    return isJwtExpired(cookieValue);
  } catch (e) {
    console.error("Erreur dans isOldCookie:", e);
    return true; // On considère le cookie comme invalide en cas d'erreur
  }
}

function isJwtExpired(token: string): boolean {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return true;

    const payload = JSON.parse(atob(parts[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
