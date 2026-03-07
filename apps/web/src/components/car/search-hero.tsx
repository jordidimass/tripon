"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"

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

const MAKES = [
  "Any",
  "Toyota",
  "Honda",
  "Mazda",
  "Kia",
  "Hyundai",
  "Nissan",
  "Ford",
  "Chevrolet",
  "Mitsubishi",
]

type SearchHeroVariant = "hero" | "header"

export function SearchHero({ variant = "hero" }: { variant?: SearchHeroVariant }) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  const [make, setMake] = React.useState("Any")
  const [priceMax, setPriceMax] = React.useState("")

  const isHeader = variant === "header"

  return (
    <form
      className={
        isHeader
          ? "w-full"
          : "grid gap-3 rounded-2xl border bg-background/80 p-4 shadow-sm ring-1 ring-foreground/5 sm:p-5"
      }
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
      {isHeader ? (
        <div className="flex w-full items-center gap-1.5 rounded-lg border bg-muted/50 px-2 py-1 ring-1 ring-foreground/5 transition-colors focus-within:ring-foreground/15 sm:rounded-xl sm:px-2.5">
          <SearchIcon className="size-3.5 shrink-0 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cars..."
            className="h-6 min-w-0 border-0 bg-transparent px-1 text-sm shadow-none focus-visible:ring-0 sm:h-7"
          />

          <div className="hidden shrink-0 lg:block">
            <Select value={make} onValueChange={setMake}>
              <SelectTrigger className="h-6 w-[120px] text-xs sm:h-7">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                {MAKES.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button size="icon" className="size-6 shrink-0 sm:size-7" aria-label="Search">
            <SearchIcon className="size-3.5" />
          </Button>
        </div>
      ) : (
        <>
          <div className="grid gap-2 sm:grid-cols-[1.2fr_220px_160px_auto]">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: Civic, Model 3, SUV, AWD..."
              className="h-10"
            />

            <Select value={make} onValueChange={setMake}>
              <SelectTrigger className="h-10 w-full">
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                {MAKES.map((m) => (
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
            <div>Tip: use filters on the results page for year, mileage, fuel, and more.</div>
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
        </>
      )}
    </form>
  )
}
