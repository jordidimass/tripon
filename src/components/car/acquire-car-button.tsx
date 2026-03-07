"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export function AcquireCarButton({ carId }: { carId: number }) {
  return (
    <div className="w-full">
      <Button asChild className="w-full">
        <Link href={`/checkout/${carId}`}>Comprar ahora</Link>
      </Button>
    </div>
  )
}
