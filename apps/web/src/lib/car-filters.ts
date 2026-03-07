import type { BodyTypeId, FuelId, SearchFilters, TransmissionId } from "@tripon/catalog"

type SearchParams = { [key: string]: string | string[] | undefined }

export type CarFilters = SearchFilters

function first(sp: SearchParams, key: string) {
  const v = sp[key]
  if (typeof v === "string") return v
  if (Array.isArray(v)) return v[0]
  return undefined
}

function toInt(v: string | undefined) {
  if (!v) return undefined
  const n = Number.parseInt(v, 10)
  return Number.isFinite(n) ? n : undefined
}

function toBool(v: string | undefined) {
  if (!v) return undefined
  if (v === "1" || v === "true") return true
  if (v === "0" || v === "false") return false
  return undefined
}

function asFuel(v: string | undefined): FuelId | undefined {
  if (!v) return undefined
  if (["gasoline", "diesel", "hybrid", "electric"].includes(v)) return v as FuelId
  return undefined
}

function asTransmission(v: string | undefined): TransmissionId | undefined {
  if (!v) return undefined
  if (["automatic", "manual", "cvt"].includes(v)) return v as TransmissionId
  return undefined
}

function asBodyType(v: string | undefined): BodyTypeId | undefined {
  if (!v) return undefined
  if (["sedan", "suv", "pickup", "hatchback"].includes(v)) return v as BodyTypeId
  return undefined
}

function asTraction(v: string | undefined): SearchFilters["traction"] {
  if (!v) return undefined
  if (["fwd", "rwd", "awd", "4x4"].includes(v)) return v as SearchFilters["traction"]
  return undefined
}

export function parseCarFilters(searchParams: SearchParams): CarFilters {
  const q = first(searchParams, "q")?.trim()
  const make = first(searchParams, "make")?.trim()
  const location = first(searchParams, "location")?.trim()

  const fuel = asFuel(first(searchParams, "fuel")?.trim())
  const transmission = asTransmission(first(searchParams, "transmission")?.trim())
  const bodyType = asBodyType(first(searchParams, "bodyType")?.trim())
  const traction = asTraction(first(searchParams, "traction")?.trim())

  const priceMin = toInt(first(searchParams, "priceMin"))
  const priceMax = toInt(first(searchParams, "priceMax"))
  const yearMin = toInt(first(searchParams, "yearMin"))
  const yearMax = toInt(first(searchParams, "yearMax"))
  const mileageMax = toInt(first(searchParams, "mileageMax"))
  const onlyDeals = toBool(first(searchParams, "onlyDeals"))

  return {
    q: q || undefined,
    make: make || undefined,
    location: location || undefined,
    fuel,
    transmission,
    bodyType,
    traction,
    priceMin,
    priceMax,
    yearMin,
    yearMax,
    mileageMax,
    onlyDeals,
  }
}

export function buildCarsResultsHref(filters: CarFilters) {
  const sp = new URLSearchParams()

  const set = (key: string, value: string | number | boolean | undefined) => {
    if (value === undefined) return
    if (typeof value === "string" && value.trim().length === 0) return
    sp.set(key, String(value))
  }

  set("q", filters.q)
  set("make", filters.make)
  set("fuel", filters.fuel)
  set("transmission", filters.transmission)
  set("bodyType", filters.bodyType)
  set("traction", filters.traction)
  set("priceMin", filters.priceMin)
  set("priceMax", filters.priceMax)
  set("yearMin", filters.yearMin)
  set("yearMax", filters.yearMax)
  set("mileageMax", filters.mileageMax)
  set("location", filters.location)
  set("onlyDeals", filters.onlyDeals ? 1 : undefined)

  const qs = sp.toString()
  return qs ? `/cars?${qs}` : "/cars"
}
