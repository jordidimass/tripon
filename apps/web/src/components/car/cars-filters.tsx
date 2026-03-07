"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import {
  toDisplayBodyType,
  toDisplayFuel,
  toDisplayTransmission,
  type BodyTypeId,
  type FuelId,
  type TransmissionId,
} from "@tripon/catalog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import type { CarFilters } from "@/lib/car-filters"
import { buildCarsResultsHref } from "@/lib/car-filters"
import { formatMoney } from "@/lib/format"

const FUEL_OPTIONS: FuelId[] = ["gasoline", "diesel", "hybrid", "electric"]
const TRANSMISSION_OPTIONS: TransmissionId[] = ["automatic", "manual", "cvt"]
const BODY_TYPE_OPTIONS: BodyTypeId[] = ["sedan", "suv", "pickup", "hatchback"]

function FiltersForm({
  filters,
  makes,
  onApply,
}: {
  filters: CarFilters
  makes: string[]
  onApply: (next: CarFilters) => void
}) {
  const [q, setQ] = React.useState(filters.q ?? "")
  const [make, setMake] = React.useState(filters.make ?? "")
  const [fuel, setFuel] = React.useState<FuelId | "">(filters.fuel ?? "")
  const [transmission, setTransmission] = React.useState<TransmissionId | "">(filters.transmission ?? "")
  const [bodyType, setBodyType] = React.useState<BodyTypeId | "">(filters.bodyType ?? "")
  const [location, setLocation] = React.useState(filters.location ?? "")
  const [mileageMax, setMileageMax] = React.useState(
    typeof filters.mileageMax === "number" ? String(filters.mileageMax) : ""
  )

  const [onlyDeals, setOnlyDeals] = React.useState(Boolean(filters.onlyDeals))

  const priceMin = filters.priceMin ?? 0
  const priceMax = filters.priceMax ?? 200000
  const [price, setPrice] = React.useState<[number, number]>([priceMin, priceMax])

  const yearMin = filters.yearMin ?? 2015
  const [year, setYear] = React.useState<number>(yearMin)

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        onApply({
          ...filters,
          q,
          make,
          fuel: fuel || undefined,
          transmission: transmission || undefined,
          bodyType: bodyType || undefined,
          location: location || undefined,
          onlyDeals,
          priceMin: price[0],
          priceMax: price[1],
          yearMin: year,
          mileageMax: mileageMax ? Number.parseInt(mileageMax, 10) : undefined,
        })
      }}
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-1.5">
          <Label>Search</Label>
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ej: pickup diesel para trabajo"
          />
        </div>
        <div className="grid gap-1.5">
          <Label>Make</Label>
          <Select value={make} onValueChange={(v) => setMake(v === "any-make" ? "" : v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-make">Any</SelectItem>
              {makes.filter(Boolean).map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Fuel</Label>
          <Select value={fuel} onValueChange={(v) => setFuel((v === "any-fuel" ? "" : v) as FuelId | "")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-fuel">Any</SelectItem>
              {FUEL_OPTIONS.map((f) => (
                <SelectItem key={f} value={f}>
                  {toDisplayFuel(f)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Transmission</Label>
          <Select
            value={transmission}
            onValueChange={(v) => setTransmission((v === "any-trans" ? "" : v) as TransmissionId | "")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-trans">Any</SelectItem>
              {TRANSMISSION_OPTIONS.map((t) => (
                <SelectItem key={t} value={t}>
                  {toDisplayTransmission(t)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Body type</Label>
          <Select value={bodyType} onValueChange={(v) => setBodyType((v === "any-body" ? "" : v) as BodyTypeId | "")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-body">Any</SelectItem>
              {BODY_TYPE_OPTIONS.map((body) => (
                <SelectItem key={body} value={body}>
                  {toDisplayBodyType(body)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label>Price</Label>
            <div className="text-xs text-muted-foreground">
              {formatMoney(price[0], "GTQ")} - {formatMoney(price[1], "GTQ")}
            </div>
          </div>
          <Slider
            value={price}
            onValueChange={(v) => setPrice(v as [number, number])}
            min={0}
            max={250000}
            step={1000}
            className="py-2"
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label>Year (min)</Label>
            <div className="text-xs text-muted-foreground">{year}</div>
          </div>
          <Slider
            value={[year]}
            onValueChange={(v) => setYear((v[0] ?? 2015) as number)}
            min={2010}
            max={2026}
            step={1}
            className="py-2"
          />
        </div>

        <div className="grid gap-2">
          <Label>Location</Label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Guatemala, Antigua, Quetzaltenango"
          />
        </div>

        <div className="grid gap-2">
          <Label>Max mileage (km)</Label>
          <Input
            inputMode="numeric"
            value={mileageMax}
            onChange={(e) => setMileageMax(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="90000"
          />
        </div>

        <div className="grid gap-2 sm:col-span-2 lg:col-span-4">
          <Label>Inspeccion</Label>
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border bg-background/60 p-3 text-sm">
            <Checkbox checked={onlyDeals} onCheckedChange={(v) => setOnlyDeals(Boolean(v))} />
            <span>Solo inspeccionados (score 90+)</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2">
        <Button type="button" variant="ghost" onClick={() => onApply({})}>
          Reset
        </Button>
        <Button type="submit">Apply filters</Button>
      </div>
    </form>
  )
}

export function CarsFilters({ filters, makes }: { filters: CarFilters; makes: string[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()

  const apply = React.useCallback(
    (next: CarFilters) => {
      const href = buildCarsResultsHref(next)
      router.push(href)
    },
    [router]
  )

  const hasAnyParams = React.useMemo(() => sp.toString().length > 0, [sp])

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-medium">Filters</div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={pathname}>Refresh</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="sm:hidden">
                Open
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Update filters and apply to refresh results.
                </SheetDescription>
              </SheetHeader>
              <div className="p-4">
                <FiltersForm
                  filters={filters}
                  makes={makes}
                  onApply={(next) => {
                    apply(next)
                  }}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="hidden sm:block">
        <FiltersForm filters={filters} makes={makes} onApply={apply} />
      </div>

      {!hasAnyParams ? null : (
        <div className="text-xs text-muted-foreground">
          Tip: share this URL to keep the same filters.
        </div>
      )}
    </div>
  )
}
