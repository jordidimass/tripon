import Link from "next/link"
import { cookies } from "next/headers"
import { notFound, redirect } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FakePaymentForm } from "@/components/payment/fake-payment-form"
import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import { formatMoney } from "@/lib/format"
import { getAutoById } from "@/lib/inventory"

export const dynamic = "force-dynamic"

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session) {
    redirect("/login")
  }

  const { id } = await params
  const car = await getAutoById(id)
  if (!car) notFound()

  return (
    <div className="relative mx-auto grid w-full max-w-2xl gap-6 overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(700px_circle_at_100%_0%,rgba(126,91,255,0.2),transparent_40%)]" />
      <div className="text-sm text-white/70">
        <Link className="hover:underline" href={`/cars/${car.id}`}>
          Volver al detalle
        </Link>
      </div>

      <Card className="border-white/15 bg-black/30 text-white backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Pago de {car.vehiculo.marca} {car.vehiculo.modelo}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="rounded-xl border border-white/15 bg-black/30 p-3 text-sm">
            <div className="font-medium">
              {car.vehiculo.anio} {car.titulo}
            </div>
            <div className="text-white/70">
              Total: {formatMoney(car.precio.monto, car.precio.moneda)}
            </div>
            <div className="text-xs text-white/60">Pago simulado para demo.</div>
          </div>

          <FakePaymentForm
            username={session.username}
            carId={car.id}
            amount={car.precio.monto}
            currency={car.precio.moneda}
          />
        </CardContent>
      </Card>
    </div>
  )
}
