import Link from "next/link"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-xl border bg-card text-sm font-semibold tracking-tight">
              T
            </span>
            <span className="text-sm font-semibold tracking-tight">Tripon</span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/cars">Browse</Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/cars">Search inventory</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
