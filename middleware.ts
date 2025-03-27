import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const loginPage = '/login'

// Liste des routes accessibles sans authentification
const publicRoutes = [
    '/login',
    '/',
    '/register-candidat',
    '/register-company',
    '/register',
    '/plasmic-host',
    '/forgot-password',
    '/reset-password',
    '/reset-password/[recovery_token]',
    '/first-install',
    '/plasmic-library',
    '/parametres',
]

export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
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
                      request.cookies.set(name, value);
                    }
                  
                    supabaseResponse = NextResponse.next({
                      request,
                    });
                  
                    for (const { name, value, options } of cookiesToSet) {
                      supabaseResponse.cookies.set(name, value, options);
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
        const url = request.nextUrl.clone()
        url.pathname = loginPage
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
