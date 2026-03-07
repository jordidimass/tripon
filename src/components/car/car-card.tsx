import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Car } from "@/lib/cars"
import { formatCurrency, formatNumber } from "@/lib/format"

export function CarCard({ car }: { car: Car }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-muted">
        <Image
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="secondary">{car.dealLabel}</Badge>
        </div>
      </div>

      <CardHeader className="gap-2">
        <CardTitle className="text-base">
          {car.year} {car.make} {car.model}
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{car.body}</Badge>
          <Badge variant="outline">{car.fuel}</Badge>
          <Badge variant="outline">{car.transmission}</Badge>
        </div>
      </CardHeader>

      <CardContent className="grid gap-2">
        <div className="flex items-baseline justify-between">
          <div className="text-lg font-semibold tracking-tight">
            {formatCurrency(car.price)}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatNumber(car.mileage)} mi
          </div>
        </div>
        <div className="text-xs text-muted-foreground">{car.location}</div>
      </CardContent>

      <CardFooter className="justify-between gap-2">
        <Button asChild size="sm" className="w-full">
          <Link href={`/cars/${car.id}`}>View car</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
