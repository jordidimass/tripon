import { getCatalogFacets } from "@tripon/catalog"
import { CarsFiltersShell } from "@/components/car/cars-filters-shell"
import { CarCard } from "@/components/car/car-card"
import { parseCarFilters } from "@/lib/car-filters"
import { searchCars } from "@/lib/search-api"

type SearchParams = { [key: string]: string | string[] | undefined }

export default async function CarsResultsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const filters = parseCarFilters(searchParams)
  const facets = getCatalogFacets()
  const response = await searchCars(filters)
  const cars = response.results.map((result) => result.car)

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Results</h1>
        <p className="text-sm text-muted-foreground">
          {response.total} car{response.total === 1 ? "" : "s"} match your search.
        </p>
        {!response.query ? null : (
          <p className="text-xs text-muted-foreground">
            {response.semanticEnabled ? "Hybrid semantic search is active." : "Keyword and rules fallback is active."}
          </p>
        )}
      </div>

      <CarsFiltersShell filters={filters} makes={facets.makes} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
