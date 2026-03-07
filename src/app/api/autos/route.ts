import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import type { AdminAutoFormData } from "@/lib/admin-auto-form"
import { adminFormToInput } from "@/lib/admin-auto-form"
import { createAuto, getAllAutos } from "@/lib/autos-store"

export const dynamic = "force-dynamic"

export async function GET() {
  const autos = await getAllAutos()
  return NextResponse.json({ autos })
}

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  try {
    const body = (await request.json()) as AdminAutoFormData
    const created = await createAuto(adminFormToInput(body))
    return NextResponse.json({ auto: created }, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo crear el auto."
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
