import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-md gap-4 rounded-3xl border bg-card/60 p-8 text-center shadow-sm ring-1 ring-foreground/10">
      <div className="text-sm font-medium">Not found</div>
      <h1 className="text-balance text-2xl font-semibold tracking-tight">
        That page does not exist.
      </h1>
      <p className="text-sm text-muted-foreground">
        Try returning to results or start a new search.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/cars">Browse cars</Link>
        </Button>
      </div>
    </div>
  )
}
