import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/60">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="font-medium text-foreground">Tripon</span> - car
            search UI scaffold.
          </div>
          <div className="flex items-center gap-3">
            <Link className="hover:text-foreground" href="/">
              Home
            </Link>
            <Link className="hover:text-foreground" href="/cars">
              Results
            </Link>
          </div>
        </div>
        <div className="text-xs">
          Inventory is mock data for now. Replace `src/lib/cars.ts` with your
          backend/API.
        </div>
      </div>
    </footer>
  )
}
