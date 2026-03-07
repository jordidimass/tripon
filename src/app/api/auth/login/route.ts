import { NextResponse } from "next/server"

import { encodeSession, SESSION_COOKIE, validateCredentials } from "@/lib/auth"

type LoginBody = {
  username?: string
  password?: string
}

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody
  const username = body.username?.trim() ?? ""
  const password = body.password ?? ""

  const session = validateCredentials(username, password)
  if (!session) {
    return NextResponse.json({ error: "Credenciales invalidas." }, { status: 401 })
  }

  const response = NextResponse.json({
    ok: true,
    user: {
      username: session.username,
      role: session.role,
      displayName: session.displayName,
    },
  })

  response.cookies.set({
    name: SESSION_COOKIE,
    value: encodeSession(session),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
