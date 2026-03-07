"use client"

import * as React from "react"
import Link from "next/link"
import { LogIn } from "lucide-react"
import { SearchHero } from "@/components/car/search-hero"
import { HomeFilters } from "@/components/car/home-filters"
import { HomeCarCard } from "@/components/car/home-car-card"
import { filterAutos } from "@/lib/filter-autos"
import type { CarFilters } from "@/lib/car-filters"
import type { Auto } from "@/lib/inventory"

export function HomePageClient({ initialAutos }: { initialAutos: Auto[] }) {
  const [showFilters, setShowFilters] = React.useState(false)
  const [filters, setFilters] = React.useState<CarFilters>({
    priceMax: 150000,
    yearMax: 2023,
  })

  const cars = React.useMemo(
    () => filterAutos(initialAutos, filters),
    [initialAutos, filters]
  )

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col items-center px-6 pt-[clamp(3rem,10vw,180px)]">
        <div className="absolute right-6 top-6 z-30">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/45"
          >
            <LogIn className="size-4" />
            Login
          </Link>
        </div>

        <img
          src="/logo.svg"
          alt="Tripon"
          className="w-[clamp(200px,22vw,383px)] select-none"
          draggable={false}
        />

        <div className="sticky top-4 z-20 mt-[clamp(1rem,2.3vw,25px)] flex w-full flex-col items-center gap-4">
          <div className="w-full max-w-[76%]">
            <SearchHero
              onFilterClick={() => setShowFilters((v) => !v)}
              filterActive={showFilters}
            />
          </div>

          {showFilters && (
            <div className="w-full max-w-[74%]">
              <HomeFilters
                filters={filters}
                onChange={setFilters}
              />
            </div>
          )}
        </div>

        <div className="mt-[clamp(2rem,4vw,68px)] grid w-full max-w-[92%] grid-cols-2 gap-4 pb-16 sm:grid-cols-3 lg:grid-cols-4">
          {cars.map((car, i) => (
            <HomeCarCard key={car.id} car={car} showPlus={i === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
