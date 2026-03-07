import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { decodeSession, SESSION_COOKIE } from "@/lib/auth"

export async function GET() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(SESSION_COOKIE)?.value
  const session = decodeSession(raw)

  if (!session) {
    return NextResponse.json({ user: null })
  }

  return NextResponse.json({
    user: {
      username: session.username,
      role: session.role,
      displayName: session.displayName,
    },
  })
}
