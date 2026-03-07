"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import type { CarFilters } from "@/lib/car-filters"

const TRANSMISSIONS: { value: string; label: string }[] = [
  { value: "Automatica", label: "Automática" },
  { value: "Mecanica", label: "Mecánica" },
  { value: "CVT", label: "CVT" },
]

export function HomeFilters({
  filters,
  onChange,
}: {
  filters: CarFilters
  onChange: (f: CarFilters) => void
}) {
  const precio = filters.priceMax ?? 150000
  const anio = filters.yearMax ?? 2023
  let selectedTrans: string[] = []
  if (filters.transmission) {
    selectedTrans = Array.isArray(filters.transmission)
      ? filters.transmission
      : [filters.transmission]
  }

  function setPrecio(v: number[]) {
    onChange({ ...filters, priceMax: v[0] })
  }
  function setAnio(v: number[]) {
    onChange({ ...filters, yearMax: v[0] })
  }
  function toggleTrans(value: string) {
    const next = selectedTrans.includes(value)
      ? selectedTrans.filter((x) => x !== value)
      : [...selectedTrans, value]
    onChange({ ...filters, transmission: next.length > 0 ? next : undefined })
  }

  return (
    <div className="w-full rounded-2xl bg-black/[0.39] px-[11.5%] py-8 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
        <div className="flex items-center gap-3 rounded-lg border border-white px-4 py-2.5 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white/60">
          <span className="shrink-0 text-xs font-normal text-white">
            PRECIO
          </span>
          <Slider
            value={[precio]}
            onValueChange={setPrecio}
            min={10000}
            max={300000}
            step={5000}
            className="flex-1"
          />
          <span className="shrink-0 text-xs font-normal tabular-nums text-white">
            Q{precio.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-white px-4 py-2.5 [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-range]]:bg-white/60">
          <span className="shrink-0 text-xs font-normal text-white">
            AÑO
          </span>
          <Slider
            value={[anio]}
            onValueChange={setAnio}
            min={2010}
            max={2026}
            step={1}
            className="flex-1"
          />
          <span className="shrink-0 text-xs font-normal tabular-nums text-white">
            {anio}
          </span>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-white/60 px-6 py-2.5">
          <span className="text-xs font-normal text-white">MARCA</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
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
  )
}
