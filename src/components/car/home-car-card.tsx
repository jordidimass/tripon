"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import type { Auto } from "@/lib/inventory"

export function HomeCarCard({
  car,
  showPlus,
}: {
  car: Auto
  showPlus?: boolean
}) {
  return (
    <Link
      href={`/cars/${car.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-white/[0.23] bg-white/[0.23] p-[7%] transition-all duration-200 hover:border-white/30 hover:bg-white/[0.28]"
    >
      <div className="relative mx-auto aspect-[2/1] w-[86%]">
        <img
          src={car.foto_url}
          alt={`${car.vehiculo.marca} ${car.vehiculo.modelo}`}
          className="h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const img = e.currentTarget
            img.style.display = "none"
          }}
        />
      </div>

      <div className="mt-auto flex items-end justify-between gap-2 pt-4">
        <div className="min-w-0">
          <div className="truncate text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
            {car.vehiculo.marca} {car.vehiculo.modelo}
          </div>
          <div className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
            {car.vehiculo.anio}
          </div>
        </div>
        {showPlus && (
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
            <Plus className="size-5" strokeWidth={2.5} />
          </div>
        )}
      </div>
    </Link>
  )
}
