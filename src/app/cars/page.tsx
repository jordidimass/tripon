import { CarsFiltersShell } from "@/components/car/cars-filters-shell"
import { CarCard } from "@/components/car/car-card"
import { parseCarFilters } from "@/lib/car-filters"
import { listAutos } from "@/lib/inventory"

type SearchParams = { [key: string]: string | string[] | undefined }

export const dynamic = "force-dynamic"

export default async function CarsResultsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams
  const filters = parseCarFilters(resolvedSearchParams)
  const cars = await listAutos(filters)

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Results</h1>
        <p className="text-sm text-muted-foreground">
          {cars.length} car{cars.length === 1 ? "" : "s"} match your search.
        </p>
      </div>

      <CarsFiltersShell filters={filters} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
