import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import { markAutoAsAcquired } from "@/lib/autos-store"
import { appendPurchase, listPurchasesByUsername } from "@/lib/purchases-store"

type PurchaseBody = {
  carId?: number
}

export async function GET() {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  const purchases = await listPurchasesByUsername(session.username)
  return NextResponse.json({ purchases })
}

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 })
  }

  const body = (await request.json()) as PurchaseBody
  const id = body.carId
  if (typeof id !== "number") {
    return NextResponse.json({ error: "carId invalido." }, { status: 400 })
  }

  const result = await markAutoAsAcquired(String(id))
  if (!result.ok) {
    if (result.reason === "not-found") {
      return NextResponse.json({ error: "Vehiculo no encontrado." }, { status: 404 })
    }
    if (result.reason === "already-acquired") {
      return NextResponse.json({ error: "Este vehiculo ya fue adquirido." }, { status: 409 })
    }
    return NextResponse.json({ error: "Solicitud invalida." }, { status: 400 })
  }

  const purchasedAt = new Date().toISOString()
  await appendPurchase({
    username: session.username,
    carId: result.auto.id,
    purchasedAt,
    amount: result.auto.precio.monto,
    currency: result.auto.precio.moneda,
  })

  return NextResponse.json({ ok: true, auto: result.auto, purchasedAt })
}
