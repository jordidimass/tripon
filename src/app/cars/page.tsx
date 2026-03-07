import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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
    <div className="relative min-h-dvh">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">Resultados</h1>
            <p className="text-sm text-muted-foreground">
              {cars.length} carro{cars.length === 1 ? "" : "s"} encontrado{cars.length === 1 ? "" : "s"}.
            </p>
          </div>

          <CarsFiltersShell filters={filters} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
