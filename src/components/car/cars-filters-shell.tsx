import { CarsFilters } from "@/components/car/cars-filters"
import type { CarFilters } from "@/lib/car-filters"

export function CarsFiltersShell({ filters }: { filters: CarFilters }) {
  return (
    <div className="rounded-3xl border bg-card/50 p-4 shadow-sm ring-1 ring-foreground/10">
      <CarsFilters filters={filters} />
    </div>
  )
}
