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
    <div className="relative min-h-[calc(100dvh-4.5rem)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_10%_0%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(900px_circle_at_100%_0%,rgba(126,91,255,0.18),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-semibold tracking-tight text-white">Resultados</h1>
          <p className="text-sm text-white/70">
            {cars.length} carro{cars.length === 1 ? "" : "s"} encontrado{cars.length === 1 ? "" : "s"}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {cars.length === 0 ? (
          <div className="rounded-2xl border border-white/15 bg-black/30 p-6 text-sm text-white/70 backdrop-blur-lg">
            No hay vehículos disponibles con estos filtros. Usa los filtros del buscador para ajustar tu búsqueda.
          </div>
        ) : null}
      </div>
    </div>
  )
}
