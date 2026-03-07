import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatMoney, formatNumber } from "@/lib/format"
import { getAutoById } from "@/lib/inventory"

export default function CarViewPage({ params }: { params: { id: string } }) {
  const car = getAutoById(params.id)
  if (!car) notFound()

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="grid gap-1">
          <div className="text-xs text-muted-foreground">
            <Link className="hover:underline" href="/cars">
              Results
            </Link>
            <span className="px-2">/</span>
            <span className="font-medium text-foreground">
              {car.vehiculo.anio} {car.vehiculo.marca} {car.vehiculo.modelo}
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {car.vehiculo.anio} {car.titulo}
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{car.vehiculo.tipo}</Badge>
            <Badge variant="outline">{car.vehiculo.combustible}</Badge>
            <Badge variant="outline">{car.vehiculo.transmision}</Badge>
            <Badge variant="outline">{`${car.ubicacion.ciudad}, ${car.ubicacion.departamento}`}</Badge>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-muted-foreground">Price</div>
          <div className="text-2xl font-semibold tracking-tight">
            {formatMoney(car.precio.monto, car.precio.moneda)}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatNumber(car.vehiculo.kilometraje)} km
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] w-full bg-muted">
            <Image
              src={car.foto_url}
              alt={`${car.vehiculo.anio} ${car.vehiculo.marca} ${car.vehiculo.modelo}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <CardContent className="grid gap-4">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Highlights</div>
              <p className="text-sm text-muted-foreground">
                {car.descripcion}
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border bg-background/60 p-3">
                <div className="text-xs text-muted-foreground">Color</div>
                <div className="mt-0.5 font-medium">{car.vehiculo.color}</div>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <div className="text-xs text-muted-foreground">Drivetrain</div>
                <div className="mt-0.5 font-medium">{car.vehiculo.traccion}</div>
              </div>
              <div className="rounded-xl border bg-background/60 p-3">
              <div className="text-xs text-muted-foreground">MPG</div>
              <div className="mt-0.5 font-medium">N/A</div>
            </div>
              <div className="rounded-xl border bg-background/60 p-3">
                <div className="text-xs text-muted-foreground">VIN</div>
                <div className="mt-0.5 font-medium">{car.identificacion.vin}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>Get this car</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-1">
              <div className="text-xs text-muted-foreground">Deal</div>
              <div className="text-sm">
                {car.estado.recien_importado ? "Recien Importado" : "Usado"}
              </div>
            </div>
            <Separator />
            <div className="grid gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                <span className="font-medium">{formatMoney(car.precio.monto, car.precio.moneda)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Est. taxes/fees</span>
                <span className="font-medium">
                  {formatMoney(car.precio.precio_sugerido - car.precio.monto, car.precio.moneda)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estimated total</span>
                <span className="font-semibold">
                  {formatMoney(car.precio.precio_sugerido, car.precio.moneda)}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">Request info</Button>
            <Button className="w-full" variant="outline">
              Schedule test drive
            </Button>
            <div className="text-xs text-muted-foreground">
              No checkout yet - this is a UI scaffold.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
