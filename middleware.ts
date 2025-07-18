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
            if ((name === 'session_id' || name.includes('auth-token')) && isOldCookie(value)) {
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

  const authCookieName = Object.keys(Object.fromEntries(request.cookies)).find(name =>
  name.startsWith('sb-') && name.endsWith('-auth-token')
);

  const authCookie = authCookieName ? request.cookies.get(authCookieName) : null;

  if (authCookie?.value && !isOldCookie(authCookie.value)) {
    response.cookies.set("persisted-auth", "true", {
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
    });
  } else {
    response.cookies.set("persisted-auth", "", {
      path: "/",
      maxAge: 0,
    });
  }

  // Déclenche la création éventuelle des cookies
  const { data: { user } } = await supabase.auth.getUser();

  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes('[recovery_token]')) {
      const regex = new RegExp(`^${route.replace('[recovery_token]', '(.*)')}$`);
      return regex.test(request.nextUrl.pathname);
    }
    return route === request.nextUrl.pathname;
  });

const hasPersistedAuth = request.cookies.get("persisted-auth")?.value === "true";
if (!isPublicRoute && !user && !hasPersistedAuth) {
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
    // Ignore if it's clearly not a JWT (ex: array)
    if (cookieValue.startsWith('["')) return false;

    const parts = cookieValue.split('.');
    if (parts.length !== 3) return true;

    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf-8'));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch (e) {
    return true;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
