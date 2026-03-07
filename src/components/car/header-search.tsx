"use client"

import * as React from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Sparkles, Mic, SlidersHorizontal } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { buildCarsResultsHref, type CarFilters } from "@/lib/car-filters"

const TRANSMISSIONS: { value: string; label: string }[] = [
  { value: "Automatica", label: "Automática" },
  { value: "Mecanica", label: "Mecánica" },
  { value: "CVT", label: "CVT" },
]

export function HeaderSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialQ = searchParams.get("q") ?? ""
  const initialPriceMax = Number(searchParams.get("priceMax")) || 150000
  const initialYearMax = Number(searchParams.get("yearMax")) || 2023
  const initialTrans = searchParams.get("transmission") ?? ""

  const [query, setQuery] = React.useState(initialQ)
  const [showFilters, setShowFilters] = React.useState(false)
  const [priceMax, setPriceMax] = React.useState(initialPriceMax)
  const [yearMax, setYearMax] = React.useState(initialYearMax)
  const [selectedTrans, setSelectedTrans] = React.useState<string[]>(
    initialTrans ? [initialTrans] : []
  )

  React.useEffect(() => {
    setQuery(searchParams.get("q") ?? "")
    setPriceMax(Number(searchParams.get("priceMax")) || 150000)
    setYearMax(Number(searchParams.get("yearMax")) || 2023)
    const t = searchParams.get("transmission") ?? ""
    setSelectedTrans(t ? [t] : [])
  }, [searchParams])

  function toggleTrans(value: string) {
    setSelectedTrans((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    )
  }

  function navigateWithFilters(q?: string) {
    const filters: CarFilters = {
      q: (q ?? query) || undefined,
      priceMax: priceMax < 150000 ? priceMax : undefined,
      yearMax: yearMax < 2023 ? yearMax : undefined,
      transmission: selectedTrans.length > 0 ? selectedTrans[0] : undefined,
    }
    router.push(buildCarsResultsHref(filters))
  }

  return (
    <div className="relative w-full">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault()
          navigateWithFilters()
        }}
      >
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition-colors focus-within:border-white/25 focus-within:bg-white/[0.08] sm:gap-4 sm:px-5 sm:py-3">
          <Sparkles className="size-4 shrink-0 text-white/70 sm:size-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Encuentra tu primer carro con confianza"
            className="min-w-0 flex-1 bg-transparent text-sm font-normal text-white placeholder:text-white/50 focus:outline-none sm:text-base"
          />
          <button
            type="button"
            className="shrink-0 rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white/80"
          >
            <Mic className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className={`shrink-0 rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-white/80 ${showFilters ? "bg-white/10 text-white/80" : "text-white/50"}`}
          >
            <SlidersHorizontal className="size-4 sm:size-5" />
          </button>
        </div>
      </form>

      {showFilters && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/15 bg-black/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
            <div className="flex items-center gap-3 rounded-lg border border-white/20 px-4 py-2.5 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white/60">
              <span className="shrink-0 text-xs font-normal text-white">
                PRECIO
              </span>
              <Slider
                value={[priceMax]}
                onValueChange={(v) => setPriceMax(v[0]!)}
                min={10000}
                max={300000}
                step={5000}
                className="flex-1"
              />
              <span className="shrink-0 text-xs font-normal tabular-nums text-white">
                Q{priceMax.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-white/20 px-4 py-2.5 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white/60">
              <span className="shrink-0 text-xs font-normal text-white">
                AÑO
              </span>
              <Slider
                value={[yearMax]}
                onValueChange={(v) => setYearMax(v[0]!)}
                min={2010}
                max={2026}
                step={1}
                className="flex-1"
              />
              <span className="shrink-0 text-xs font-normal tabular-nums text-white">
                {yearMax}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigateWithFilters()}
              className="flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
            >
              Buscar
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {TRANSMISSIONS.map(({ value, label }) => {
              const on = selectedTrans.includes(value)
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => toggleTrans(value)}
                  className="flex items-center gap-2"
                >
                  <span className="text-xs font-normal text-white">{label}</span>
                  <div
                    className={`relative h-5 w-10 rounded-full transition-colors ${on ? "bg-white/30" : "bg-white/20"}`}
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 rounded-full transition-all duration-200 ${on ? "left-[22px] bg-white" : "left-0.5 bg-white/50"}`}
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
