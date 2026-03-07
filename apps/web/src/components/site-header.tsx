import Link from "next/link"
import { cookies } from "next/headers"

import { AuthControls } from "@/components/auth/auth-controls"
import { SearchHero } from "@/components/car/search-hero"
import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export async function SiteHeader() {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  const isLoggedIn = Boolean(session)
  const isAdmin = session?.role === "admin"

  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-12 w-full max-w-6xl items-center gap-2 px-3 sm:h-14 sm:gap-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg border bg-card text-xs font-semibold tracking-tight sm:size-8 sm:rounded-xl sm:text-sm">
            T
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">Tripon</span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-0.5 md:flex">
          {isLoggedIn ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/cars">Browse</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/perfil">Perfil</Link>
              </Button>
              {isAdmin ? (
                <Button asChild variant="ghost" size="sm">
                  <Link href="/admin/autos">Admin</Link>
                </Button>
              ) : null}
            </>
          ) : null}
        </nav>

        <div className="mx-auto min-w-0 flex-1 sm:max-w-md lg:max-w-lg">
          <SearchHero variant="header" />
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <AuthControls />
        </div>
      </div>
    </header>
  )
}
