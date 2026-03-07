import {
  autos,
  searchableAutos,
  type Auto,
  type SearchFilters,
} from "@tripon/catalog"
import { applyFilters, rankCars } from "@tripon/search-core"

export { getAutoById, autos, type Auto } from "@tripon/catalog"

export async function listAutos(filters: SearchFilters): Promise<Auto[]> {
  const query = (filters.q ?? "").trim()

  if (query.length > 0) {
    const ranked = rankCars({
      cars: searchableAutos,
      query,
      manualFilters: filters,
    })
    return ranked.results.map((r) => r.car)
  }

  const filtered = applyFilters(searchableAutos, filters)
  return filtered
    .map((c) => c.raw)
    .sort((a, b) => b.vehiculo.anio - a.vehiculo.anio || a.precio.monto - b.precio.monto)
}
