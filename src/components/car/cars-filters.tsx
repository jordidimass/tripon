"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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
import { formatCurrency } from "@/lib/format"
import type { CarFuel, CarTransmission } from "@/lib/cars"

const MAKES = ["Audi", "BMW", "Ford", "Honda", "Kia", "Mazda", "Mercedes", "Tesla", "Toyota", "Volkswagen"]
const FUEL = ["Gas", "Hybrid", "Electric", "Diesel"]
const TRANS = ["Automatic", "Manual"]

function FiltersForm({ filters, onApply }: { filters: CarFilters; onApply: (next: CarFilters) => void }) {
  const [q, setQ] = React.useState(filters.q ?? "")
  const [make, setMake] = React.useState(filters.make ?? "")
  const [fuel, setFuel] = React.useState<CarFuel | "">(filters.fuel ?? "")
  const [transmission, setTransmission] = React.useState<CarTransmission | "">(
    filters.transmission ?? ""
  )

  const [onlyDeals, setOnlyDeals] = React.useState(Boolean(filters.onlyDeals))

  const priceMin = filters.priceMin ?? 0
  const priceMax = filters.priceMax ?? 80000
  const [price, setPrice] = React.useState<[number, number]>([priceMin, priceMax])

  const yearMin = filters.yearMin ?? 2016
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
          onlyDeals,
          priceMin: price[0],
          priceMax: price[1],
          yearMin: year,
        })
      }}
    >
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="grid gap-1.5">
          <Label>Search</Label>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Model, body, keyword..." />
        </div>
        <div className="grid gap-1.5">
          <Label>Make</Label>
          <Select value={make} onValueChange={(v) => setMake(v === "any-make" ? "" : v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-make">Any</SelectItem>
              {MAKES.filter(Boolean).map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Fuel</Label>
          <Select value={fuel} onValueChange={(v) => setFuel((v === "any-fuel" ? "" : v) as CarFuel | "")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-fuel">Any</SelectItem>
              {FUEL.filter(Boolean).map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Transmission</Label>
          <Select
            value={transmission}
            onValueChange={(v) => setTransmission((v === "any-trans" ? "" : v) as CarTransmission | "")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-trans">Any</SelectItem>
              {TRANS.filter(Boolean).map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label>Price</Label>
            <div className="text-xs text-muted-foreground">
              {formatCurrency(price[0])} - {formatCurrency(price[1])}
            </div>
          </div>
          <Slider
            value={price}
            onValueChange={(v) => setPrice(v as [number, number])}
            min={0}
            max={120000}
            step={500}
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
            onValueChange={(v) => setYear((v[0] ?? 2016) as number)}
            min={2008}
            max={2026}
            step={1}
            className="py-2"
          />
        </div>

        <div className="grid gap-2">
          <Label>Deal</Label>
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border bg-background/60 p-3 text-sm">
            <Checkbox checked={onlyDeals} onCheckedChange={(v) => setOnlyDeals(Boolean(v))} />
            <span>Only show highlighted deals</span>
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

export function CarsFilters({ filters }: { filters: CarFilters }) {
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
        <FiltersForm filters={filters} onApply={apply} />
      </div>

      {!hasAnyParams ? null : (
        <div className="text-xs text-muted-foreground">
          Tip: share this URL to keep the same filters.
        </div>
      )}
    </div>
  )
}
