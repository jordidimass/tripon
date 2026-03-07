import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import type { AdminAutoFormData } from "@/lib/admin-auto-form"
import { adminFormToInput } from "@/lib/admin-auto-form"
import { deleteAuto, updateAuto } from "@/lib/autos-store"

export const dynamic = "force-dynamic"

type Params = { params: Promise<{ id: string }> }

export async function PUT(request: Request, { params }: Params) {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  try {
    const { id } = await params
    const body = (await request.json()) as AdminAutoFormData
    const updated = await updateAuto(id, adminFormToInput(body))

    if (!updated) {
      return NextResponse.json({ error: "Auto no encontrado." }, { status: 404 })
    }

    return NextResponse.json({ auto: updated })
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo actualizar el auto."
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function DELETE(_: Request, { params }: Params) {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  const { id } = await params
  const removed = await deleteAuto(id)

  if (!removed) {
    return NextResponse.json({ error: "Auto no encontrado." }, { status: 404 })
  }

  return NextResponse.json({ ok: true })
}
