import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-black p-4">
      <div className="mx-auto grid max-w-md gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <div className="text-sm font-medium text-white/60">No encontrado</div>
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-white">
          Esa página no existe.
        </h1>
        <p className="text-sm text-white/50">
          Intenta volver al inicio o buscar de nuevo.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">Ir al inicio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/cars">Ver carros</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
