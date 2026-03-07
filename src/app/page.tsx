import { SearchHero } from "@/components/car/search-hero"

export default function HomePage() {
  return (
    <div className="grid gap-10">
      <section className="relative overflow-hidden rounded-3xl border bg-card/60 p-8 shadow-sm ring-1 ring-foreground/10 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_10%,oklch(0.92_0.03_250),transparent_55%),radial-gradient(500px_circle_at_80%_0%,oklch(0.97_0_0),transparent_50%)]" />
        <div className="relative grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Find the right car, fast.
            </h1>
            <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
              Search by make, model, budget, and key specs. Filter results and
              open a full vehicle view in one click.
            </p>
          </div>

          <SearchHero />

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5">
              <div className="text-sm font-medium">Transparent pricing</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Clear totals and taxes estimate.
              </div>
            </div>
            <div className="rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5">
              <div className="text-sm font-medium">Real filters</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Year, mileage, fuel, transmission.
              </div>
            </div>
            <div className="rounded-2xl border bg-background/70 p-4 ring-1 ring-foreground/5">
              <div className="text-sm font-medium">Fast browsing</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Save time with curated inventory.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
