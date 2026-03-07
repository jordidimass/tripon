"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

type SessionUser = {
  username: string
  role: "admin" | "user"
  displayName: string
}

export function AuthControls() {
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" })
        const data = (await res.json()) as { user?: SessionUser | null }
        setUser(data.user ?? null)
      } catch {
        setUser(null)
      } finally {
      }
    }

    void load()
  }, [])

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
    router.push("/login")
    router.refresh()
  }

  if (!user) {
    return (
      <Button asChild variant="outline" size="sm">
        <Link href="/login">Login</Link>
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="hidden text-xs text-muted-foreground sm:block">
        {user.displayName} ({user.role})
      </div>
      <Button type="button" variant="outline" size="sm" onClick={logout}>
        Logout
      </Button>
    </div>
  )
}
