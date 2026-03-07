type SearchParams = { [key: string]: string | string[] | undefined }

export type CarFilters = {
  q?: string
  make?: string
  fuel?: string
  transmission?: string
  priceMin?: number
  priceMax?: number
  yearMin?: number
  onlyDeals?: boolean
}

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

export function parseCarFilters(searchParams: SearchParams): CarFilters {
  const q = first(searchParams, "q")?.trim()
  const make = first(searchParams, "make")?.trim()

  const fuel = first(searchParams, "fuel")?.trim()
  const transmission = first(searchParams, "transmission")?.trim()

  const priceMin = toInt(first(searchParams, "priceMin"))
  const priceMax = toInt(first(searchParams, "priceMax"))
  const yearMin = toInt(first(searchParams, "yearMin"))
  const onlyDeals = toBool(first(searchParams, "onlyDeals"))

  return {
    q: q || undefined,
    make: make || undefined,
    fuel: fuel || undefined,
    transmission: transmission || undefined,
    priceMin,
    priceMax,
    yearMin,
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
  set("priceMin", filters.priceMin)
  set("priceMax", filters.priceMax)
  set("yearMin", filters.yearMin)
  set("onlyDeals", filters.onlyDeals ? 1 : undefined)

  const qs = sp.toString()
  return qs ? `/cars?${qs}` : "/cars"
}
