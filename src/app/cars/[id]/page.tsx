import Link from "next/link"
import { notFound } from "next/navigation"
import { Sparkles, Check } from "lucide-react"
import { AcquireCarButton } from "@/components/car/acquire-car-button"
import { formatMoney, formatNumber } from "@/lib/format"
import { getAutoById } from "@/lib/inventory"

export const dynamic = "force-dynamic"

function ScoreCircle({ score }: { score: number }) {
  const r = 42
  const c = 2 * Math.PI * r
  const offset = c * (1 - score / 100)
  const label =
    score >= 90 ? "Excelente" : score >= 80 ? "Muy Bueno" : score >= 70 ? "Bueno" : "Regular"

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative size-28">
        <svg className="-rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="7"
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">
            {score}<span className="text-lg">%</span>
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  )
}

function getAnalysis(car: Awaited<ReturnType<typeof getAutoById>>) {
  if (!car) return ""
  const priceDiff = car.precio.precio_sugerido - car.precio.monto
  const pricePct = Math.round((priceDiff / car.precio.precio_sugerido) * 100)
  const repuestos =
    car.facilidad_repuestos_gt === "Alta"
      ? "fáciles de conseguir en Guatemala y su mantenimiento suele ser económico"
      : car.facilidad_repuestos_gt === "Media"
        ? "accesibles en Guatemala aunque algunos pueden tardar"
        : "limitados en Guatemala, lo que puede encarecer el mantenimiento"

  const historial = car.estado.choques_reportados
    ? "presenta choques reportados en su historial"
    : "no presenta alertas de historial"

  return `Este vehículo tiene un precio ${pricePct}% por debajo del promedio del mercado para modelos similares en Guatemala. El kilometraje es consistente con su año y ${historial}. Los repuestos de este modelo son ${repuestos}.`
}

function getRecommendation(score: number) {
  if (score >= 90) return "Excelente opción de compra."
  if (score >= 80) return "Buena opción para primer vehículo."
  if (score >= 70) return "Opción aceptable, revisar detalles."
  return "Revisar con mecánico antes de comprar."
}

export default async function CarViewPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const car = await getAutoById(id)
  if (!car) notFound()

  const score = car.inspeccion?.score_confianza ?? 0
  const analysis = getAnalysis(car)
  const recommendation = getRecommendation(score)

  const checks = [
    { label: "Historial legal", ok: car.estado.papeles_en_orden },
    { label: "Condición mecánica", ok: car.inspeccion?.resultado === "Aprobado" },
    { label: "Precio vs. mercado", ok: car.precio.monto <= car.precio.precio_sugerido },
    { label: "Barato", ok: car.precio.monto < car.precio.precio_sugerido * 0.95 },
  ]

  const specs = [
    ["MARCA", car.vehiculo.marca],
    ["MODELO", car.vehiculo.modelo],
    ["AÑO", String(car.vehiculo.anio)],
    ["TIPO", car.vehiculo.tipo],
    ["COLOR", car.vehiculo.color],
    ["N° PUERTAS", String(car.vehiculo.numero_puertas)],
    ["N° PASAJEROS", String(car.vehiculo.capacidad_pasajeros)],
    ["COMBUSTIBLE", car.vehiculo.combustible],
    ["TRACCIÓN", car.vehiculo.traccion],
    ["KILOMETRAJE", `${formatNumber(car.vehiculo.kilometraje)} km`],
    ["CONDICIÓN", car.vehiculo.condicion],
  ]

  return (
    <div className="min-h-dvh bg-[#f0f0f0]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#e8e8e8] to-[#f0f0f0] pb-8 pt-6">
        <Link href="/" className="absolute right-8 top-6 z-10">
          <img
            src="/logo-dark.svg"
            alt="Tripon"
            className="h-12 w-auto sm:h-[57px]"
            draggable={false}
          />
        </Link>

        <div className="mx-auto flex max-w-6xl items-center justify-center px-8 pt-8">
          <img
            src={car.foto_url}
            alt={`${car.vehiculo.marca} ${car.vehiculo.modelo} ${car.vehiculo.anio}`}
            className="max-h-[420px] w-full max-w-4xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Info bar */}
      <div className="mx-auto max-w-6xl px-8 py-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                {car.vehiculo.marca} {car.vehiculo.modelo} {car.vehiculo.anio}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {car.vehiculo.transmision} • {car.vehiculo.combustible} •{" "}
                {formatNumber(car.vehiculo.kilometraje)} km
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                ver info de vendedor
              </button>
              <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                comprar
              </button>
              <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                Inspección
              </button>
            </div>
          </div>

          <ScoreCircle score={score} />
        </div>
      </div>

      {/* Bottom 3 columns */}
      <div className="mx-auto max-w-6xl px-8 pb-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Análisis inteligente */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="size-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-900">
                Análisis inteligente
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              {analysis}
            </p>
            <p className="mt-4 text-xs font-medium text-gray-800">
              Nuestra recomendación: {recommendation}
            </p>
          </div>

          {/* Precio */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {formatMoney(car.precio.monto, car.precio.moneda)}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              precio en mercado{" "}
              {formatMoney(car.precio.precio_sugerido, car.precio.moneda)}
            </p>
            <div className="mt-4 grid gap-2">
              {checks.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div
                    className={`flex size-5 items-center justify-center rounded-full ${c.ok ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                  <span className="text-xs text-gray-700">{c.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <AcquireCarButton carId={car.id} />
            </div>
          </div>

          {/* Specs */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="grid gap-1.5">
              {specs.map(([key, val]) => (
                <div key={key} className="flex items-baseline justify-between gap-4 text-xs">
                  <span className="font-semibold uppercase tracking-wide text-gray-500">
                    {key}
                  </span>
                  <span className="text-right text-gray-900">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
