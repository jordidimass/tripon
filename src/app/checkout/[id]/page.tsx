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
    <div className="mx-auto grid w-full max-w-2xl gap-6">
      <div className="text-sm text-muted-foreground">
        <Link className="hover:underline" href={`/cars/${car.id}`}>
          Volver al detalle
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pago de {car.vehiculo.marca} {car.vehiculo.modelo}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="rounded-xl border p-3 text-sm">
            <div className="font-medium">
              {car.vehiculo.anio} {car.titulo}
            </div>
            <div className="text-muted-foreground">
              Total: {formatMoney(car.precio.monto, car.precio.moneda)}
            </div>
            <div className="text-xs text-muted-foreground">Pago simulado para demo.</div>
          </div>

          <FakePaymentForm
            carId={car.id}
          />
        </CardContent>
      </Card>
    </div>
  )
}
