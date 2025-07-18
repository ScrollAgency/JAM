import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const loginPage = '/login';

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
  '/auth/callback',
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

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
    console.log("🔁 setAll cookie", name, value?.substring(0,30), options);
    response.cookies.set(name, value, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 60 * 60,
      ...options,
    });
    
  }
  response.cookies.set(`sb-${process.env.NEXT_PUBLIC_SUPABASE_ID}-refresh-token`, 'stub-refresh-token', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 jours
  });

}
      },
    }
  );

  // Auth Supabase
  const { data: { user } } = await supabase.auth.getUser();

  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes('[recovery_token]')) {
      const regex = new RegExp(`^${route.replace('[recovery_token]', '(.*)')}$`);
      return regex.test(request.nextUrl.pathname);
    }
    return route === request.nextUrl.pathname;
  });

  if (!isPublicRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = loginPage;
    return NextResponse.redirect(url);
  }

  // Cookie de test pour debug
  response.cookies.set("middleware-test", "ok", {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 5,
  });

  console.log("📥 Cookies reçus :", request.cookies.getAll());
  console.log("📤 Cookies envoyés :", response.headers.get("set-cookie"));

  return response;
}

// 🔍 Expire si JWT est invalide ou token Google expiré
function isOldCookie(cookieValue: string): boolean {
  try {
    // Format tableau → OAuth Google, etc.
    if (cookieValue.startsWith('["')) {
      const [access_token] = JSON.parse(cookieValue);
      return isJwtExpired(access_token);
    }
    // Format JWT simple
    return isJwtExpired(cookieValue);
  } catch (e) {
    console.error("Erreur dans isOldCookie:", e);
    return true;
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
};
