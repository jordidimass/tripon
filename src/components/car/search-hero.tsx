"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Sparkles, Mic, SlidersHorizontal } from "lucide-react"
import { buildCarsResultsHref } from "@/lib/car-filters"

export function SearchHero({
  onFilterClick,
  filterActive,
}: {
  onFilterClick?: () => void
  filterActive?: boolean
}) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(buildCarsResultsHref({ q: query }))
      }}
    >
      <div className="flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-5 shadow-[0_4px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-colors focus-within:border-white/25 focus-within:bg-white/[0.08]">
        <Sparkles className="size-6 shrink-0 text-white/70" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Encuentra tu primer carro con confianza"
          className="flex-1 bg-transparent text-base font-normal text-white placeholder:text-white/50 focus:outline-none sm:text-lg lg:text-2xl"
        />
        <button
          type="button"
          className="shrink-0 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white/80"
        >
          <Mic className="size-6" />
        </button>
        {onFilterClick && (
          <button
            type="button"
            onClick={onFilterClick}
            className={`shrink-0 rounded-full p-2 transition-colors hover:bg-white/10 hover:text-white/80 ${filterActive ? "bg-white/10 text-white/80" : "text-white/50"}`}
          >
            <SlidersHorizontal className="size-6" />
          </button>
        )}
      </div>
    </form>
  )
}
