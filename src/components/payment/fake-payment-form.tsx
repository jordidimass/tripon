"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { parseJsonSafe } from "@/lib/http-client"

type Props = { carId: number }

export function FakePaymentForm({ carId }: Props) {
  const router = useRouter()
  const [holder, setHolder] = useState("")
  const [card, setCard] = useState("")
  const [cvv, setCvv] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const pay = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!holder.trim() || card.trim().length < 8 || cvv.trim().length < 3) {
      setError("Completa los datos de pago.")
      return
    }

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const purchaseRes = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carId }),
      })
      const purchaseData = await parseJsonSafe<{ error?: string }>(purchaseRes)
      if (!purchaseRes.ok) {
        throw new Error(purchaseData?.error ?? "No se pudo completar la compra.")
      }

      router.push("/perfil")
      router.refresh()
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo completar la compra.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="grid gap-3" onSubmit={pay}>
      <div className="grid gap-1.5">
        <Label htmlFor="holder">Nombre en tarjeta</Label>
        <Input
          id="holder"
          value={holder}
          onChange={(e) => setHolder(e.target.value)}
          placeholder="Nombre completo"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="card">Numero de tarjeta</Label>
        <Input
          id="card"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          placeholder="4242 4242 4242 4242"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="cvv">CVV</Label>
        <Input id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" />
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <Button type="submit" disabled={loading}>
        {loading ? "Procesando pago..." : "Pagar (falso)"}
      </Button>
    </form>
  )
}
