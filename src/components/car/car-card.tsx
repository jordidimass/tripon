import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Auto } from "@/lib/inventory"
import { formatMoney, formatNumber } from "@/lib/format"

export function CarCard({ car }: { car: Auto }) {
  const title = `${car.vehiculo.anio} ${car.vehiculo.marca} ${car.vehiculo.modelo}`
  const score = car.inspeccion?.score_confianza

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-muted">
        <img
          src={car.foto_url || "/cars/tesla-model3.svg"}
          alt={title}
          width={640}
          height={400}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge
            variant={car.publicacion.estado === "Disponible" ? "secondary" : "outline"}
          >
            {car.publicacion.estado}
          </Badge>
          {typeof score === "number" ? (
            <Badge variant="outline">Score {score}</Badge>
          ) : null}
        </div>
      </div>

      <CardHeader className="gap-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{car.vehiculo.tipo}</Badge>
          <Badge variant="outline">{car.vehiculo.combustible}</Badge>
          <Badge variant="outline">{car.vehiculo.transmision}</Badge>
        </div>
      </CardHeader>

      <CardContent className="grid gap-2">
        <div className="flex items-baseline justify-between">
          <div className="text-lg font-semibold tracking-tight">
            {formatMoney(car.precio.monto, car.precio.moneda)}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatNumber(car.vehiculo.kilometraje)} km
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          {car.ubicacion.ciudad}, {car.ubicacion.departamento}
        </div>
      </CardContent>

      <CardFooter className="justify-between gap-2">
        <Button asChild size="sm" className="w-full">
          <Link href={`/cars/${car.id}`}>Ver vehiculo</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
