"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { parseJsonSafe } from "@/lib/http-client"

type LoginResponse = {
  error?: string
  user?: {
    role: "admin" | "user"
  }
}

export function LoginForm({ nextPath }: { nextPath?: string }) {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      const data = await parseJsonSafe<LoginResponse>(res)
      if (!res.ok || !data || !data.user) {
        throw new Error(data?.error ?? "No se pudo iniciar sesion.")
      }

      const fallback = data.user.role === "admin" ? "/admin/autos" : "/perfil"
      const destination = nextPath && nextPath.startsWith("/") ? nextPath : fallback
      router.push(destination)
      router.refresh()
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo iniciar sesion.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Iniciar sesion</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-1.5">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin@tripon.com"
              />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu password"
              />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <Button type="submit" disabled={loading}>
              {loading ? "Ingresando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usuarios quemados</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm">
          <div>
            <div className="font-medium">Administrador</div>
            <div className="text-muted-foreground">admin@tripon.com / Admin123*</div>
          </div>
          <div>
            <div className="font-medium">Usuario</div>
            <div className="text-muted-foreground">user@tripon.com / User123*</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
