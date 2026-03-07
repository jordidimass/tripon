"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { buildCarsResultsHref } from "@/lib/car-filters"

export function SearchHero({ makes }: { makes: string[] }) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  const [make, setMake] = React.useState("Any")
  const [priceMax, setPriceMax] = React.useState("")

  return (
    <form
      className="grid gap-3 rounded-2xl border bg-background/80 p-4 shadow-sm ring-1 ring-foreground/5 sm:p-5"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(
          buildCarsResultsHref({
            q: query,
            make: make === "Any" ? "" : make,
            priceMax: priceMax ? Number.parseInt(priceMax, 10) : undefined,
          })
        )
      }}
    >
      <div className="grid gap-2 sm:grid-cols-[1.2fr_220px_160px_auto]">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por keyword o lenguaje natural: SUV familiar automatica..."
          className="h-10"
        />

        <Select value={make} onValueChange={setMake}>
          <SelectTrigger className="h-10 w-full">
            <SelectValue placeholder="Make" />
          </SelectTrigger>
          <SelectContent>
            {["Any", ...makes].map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          inputMode="numeric"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="Max price"
          className="h-10"
        />

        <Button className="h-10">Search</Button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <div>Tip: prueba consultas como &quot;pickup diesel para trabajo&quot; o combina lenguaje natural con filtros.</div>
        <button
          type="button"
          className="underline underline-offset-4 hover:text-foreground"
          onClick={() => {
            setQuery("")
            setMake("Any")
            setPriceMax("")
          }}
        >
          Clear
        </button>
      </div>
    </form>
  )
}
