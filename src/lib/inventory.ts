import type { Auto } from "@/data/cars"
import type { CarFilters } from "@/lib/car-filters"
import {
  getAutoById as getAutoByIdFromStore,
  getAllAutos,
  listAutos as listAutosFromStore,
} from "@/lib/autos-store"

export type { Auto }

export async function getAutoById(id: string) {
  return getAutoByIdFromStore(id)
}

export async function listAutos(filters: CarFilters) {
  return listAutosFromStore(filters)
}

export async function listAllAutos() {
  return getAllAutos()
}
