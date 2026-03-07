import Link from "next/link"
import { cookies } from "next/headers"

import { AuthControls } from "@/components/auth/auth-controls"
import { decodeSession, SESSION_COOKIE } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export async function SiteHeader() {
  const cookieStore = await cookies()
  const session = decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
  const isLoggedIn = Boolean(session)
  const isAdmin = session?.role === "admin"

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
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button asChild variant="outline" size="sm">
              <Link href="/cars">Search inventory</Link>
            </Button>
          ) : null}
          <AuthControls />
        </div>
      </div>
    </header>
  )
}
