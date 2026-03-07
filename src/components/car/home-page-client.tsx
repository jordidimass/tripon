"use client"

import { HomeCarCard } from "@/components/car/home-car-card"
import type { Auto } from "@/lib/inventory"

export function HomePageClient({ initialAutos }: { initialAutos: Auto[] }) {
  return (
    <div className="relative min-h-[calc(100dvh-4.5rem)] overflow-x-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col items-center px-6 pt-[clamp(1.5rem,4vw,60px)]">
        <div className="grid w-full max-w-[92%] grid-cols-2 gap-4 pb-16 sm:grid-cols-3 lg:grid-cols-4">
          {initialAutos.map((car, i) => (
            <HomeCarCard key={car.id} car={car} showPlus={i === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}
