import { CarsFilters } from "@/components/car/cars-filters"
import type { CarFilters } from "@/lib/car-filters"

export function CarsFiltersShell({ filters }: { filters: CarFilters }) {
  return (
    <div className="sticky top-4 z-20 rounded-3xl border border-white/15 bg-black/35 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <CarsFilters filters={filters} />
    </div>
  )
}
