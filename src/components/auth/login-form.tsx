"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
      const data = (await res.json()) as LoginResponse
      if (!res.ok || !data.user) {
        throw new Error(data.error ?? "No se pudo iniciar sesion.")
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
      <Card className="border-white/15 bg-black/35 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
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

            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <Button type="submit" disabled={loading}>
              {loading ? "Ingresando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-white/15 bg-black/30 text-white/90 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Usuarios quemados</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm">
          <div>
            <div className="font-medium">Administrador</div>
            <div className="text-white/65">admin@tripon.com / Admin123*</div>
          </div>
          <div>
            <div className="font-medium">Usuario</div>
            <div className="text-white/65">user@tripon.com / User123*</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
