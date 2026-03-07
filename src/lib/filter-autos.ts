import type { Auto } from "@/data/cars"
import type { CarFilters } from "@/lib/car-filters"

/** Filtra autos en memoria (para uso en cliente con datos pre-cargados) */
export function filterAutos(autos: Auto[], filters: CarFilters): Auto[] {
  const q = (filters.q ?? "").trim().toLowerCase()
  return autos
    .filter((a) => {
      if (filters.make && a.vehiculo.marca !== filters.make) return false
      if (filters.fuel && a.vehiculo.combustible !== filters.fuel) return false
      if (filters.transmission) {
        const t = filters.transmission
        const arr = Array.isArray(t) ? t : [t]
        if (arr.length > 0 && !arr.includes(a.vehiculo.transmision)) return false
      }
      if (typeof filters.priceMin === "number" && a.precio.monto < filters.priceMin) return false
      if (typeof filters.priceMax === "number" && a.precio.monto > filters.priceMax) return false
      if (typeof filters.yearMin === "number" && a.vehiculo.anio < filters.yearMin) return false
      if (typeof filters.yearMax === "number" && a.vehiculo.anio > filters.yearMax) return false
      if (filters.onlyDeals) {
        if (!a.inspeccion?.realizada) return false
        if ((a.inspeccion?.score_confianza ?? 0) < 90) return false
      }
      if (q) {
        const haystack = [
          a.titulo,
          a.descripcion,
          a.vehiculo.marca,
          a.vehiculo.modelo,
          a.vehiculo.version,
          a.vehiculo.tipo,
          a.vehiculo.color,
          a.vehiculo.combustible,
          a.vehiculo.transmision,
          a.vehiculo.traccion,
          a.ubicacion.ciudad,
          a.ubicacion.departamento,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
    .sort((a, b) => b.vehiculo.anio - a.vehiculo.anio || a.precio.monto - b.precio.monto)
}
