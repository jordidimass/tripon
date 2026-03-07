import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { decodeSession, SESSION_COOKIE } from "./src/lib/auth"

function withNext(pathname: string, request: NextRequest) {
  const loginUrl = new URL("/login", request.url)
  loginUrl.searchParams.set("next", pathname)
  return loginUrl
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const raw = request.cookies.get(SESSION_COOKIE)?.value
  const session = decodeSession(raw)

  const needsLogin =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/mis-autos") ||
    pathname.startsWith("/perfil") ||
    pathname.startsWith("/checkout")

  if (pathname === "/login" && session) {
    const dest = session.role === "admin" ? "/admin/autos" : "/perfil"
    return NextResponse.redirect(new URL(dest, request.url))
  }

  if (needsLogin && !session) {
    return NextResponse.redirect(withNext(pathname, request))
  }

  if (pathname.startsWith("/admin") && session?.role !== "admin") {
    return NextResponse.redirect(new URL("/perfil", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
