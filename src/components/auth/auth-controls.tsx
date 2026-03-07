"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { parseJsonSafe } from "@/lib/http-client"

type SessionUser = {
  username: string
  role: "admin" | "user"
  displayName: string
}

export function AuthControls() {
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" })
        const data = await parseJsonSafe<{ user?: SessionUser | null }>(res)
        setUser(data?.user ?? null)
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
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

  if (loading) {
    return <div className="text-xs text-muted-foreground">...</div>
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
