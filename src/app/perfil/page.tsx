"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { CarCard } from "@/components/car/car-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Auto } from "@/data/cars"
import { formatMoney } from "@/lib/format"
import { readPurchases, type PurchaseRecord } from "@/lib/client-purchases"

type SessionUser = {
  username: string
  role: "admin" | "user"
  displayName: string
}

export default function ProfilePage() {
  const [user, setUser] = useState<SessionUser | null>(null)
  const [cars, setCars] = useState<Auto[]>([])
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      setError("")
      try {
        const meRes = await fetch("/api/auth/me", { cache: "no-store" })
        const meData = (await meRes.json()) as { user?: SessionUser | null }
        const currentUser = meData.user ?? null
        setUser(currentUser)
        if (!currentUser) {
          setCars([])
          setPurchases([])
          return
        }

        const userPurchases = readPurchases().filter((p) => p.username === currentUser.username)
        setPurchases(userPurchases)

        if (userPurchases.length === 0) {
          setCars([])
          return
        }

        const autosRes = await fetch("/api/autos", { cache: "no-store" })
        const autosData = (await autosRes.json()) as { autos?: Auto[]; error?: string }
        if (!autosRes.ok) throw new Error(autosData.error ?? "No se pudo cargar autos.")

        const ids = new Set(userPurchases.map((p) => p.carId))
        const boughtCars = (autosData.autos ?? []).filter((auto) => ids.has(auto.id))
        setCars(boughtCars)
      } catch (e) {
        setError(e instanceof Error ? e.message : "No se pudo cargar tu perfil.")
      } finally {
        setLoading(false)
      }
    }

    void load()
  }, [])

  const lastPurchase = useMemo(() => {
    if (purchases.length === 0) return null
    return [...purchases].sort((a, b) => b.purchasedAt.localeCompare(a.purchasedAt))[0]
  }, [purchases])

  return (
    <div className="relative mx-auto grid w-full max-w-6xl gap-6 overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(850px_circle_at_95%_0%,rgba(126,91,255,0.16),transparent_42%)]" />
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Mi perfil</h1>
        <p className="text-sm text-white/70">
          Aqui ves tu historial de compra y los carros adquiridos.
        </p>
      </div>

      {loading ? <p className="text-sm text-white/70">Cargando perfil...</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      {!loading && !error && user ? (
        <Card className="border-white/15 bg-black/30 text-white backdrop-blur-xl">
          <CardHeader>
            <CardTitle>{user.displayName}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1 text-sm">
            <div className="text-white/70">{user.username}</div>
            <div className="text-white/70">Rol: {user.role}</div>
            <div className="text-white/70">Compras realizadas: {purchases.length}</div>
            {lastPurchase ? (
              <div className="text-white/70">
                Ultima compra: {formatMoney(lastPurchase.amount, lastPurchase.currency)}
              </div>
            ) : null}
          </CardContent>
        </Card>
      ) : null}

      {!loading && !error && cars.length === 0 ? (
        <Card className="border-white/15 bg-black/30 text-white backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Sin compras todavia</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-white/70">
            Aun no has comprado un carro. Ve al catalogo y finaliza un pago simulado.
            <div className="mt-3">
              <Link href="/cars" className="underline text-white">
                Ir a buscar autos
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
