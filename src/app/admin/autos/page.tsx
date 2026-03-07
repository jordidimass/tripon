"use client"

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react"

import type { Auto } from "@/data/cars"
import {
  autoToAdminForm,
  EMPTY_ADMIN_AUTO_FORM,
  type AdminAutoFormData,
} from "@/lib/admin-auto-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { parseJsonSafe } from "@/lib/http-client"

const fuelOptions: AdminAutoFormData["combustible"][] = ["Gasolina", "Diesel", "Hybrid", "Electric"]
const transmissionOptions: AdminAutoFormData["transmision"][] = ["Automatica", "Mecanica", "CVT"]
const typeOptions: AdminAutoFormData["tipo"][] = ["Sedan", "SUV", "Pickup", "Hatchback"]
const tractionOptions: AdminAutoFormData["traccion"][] = ["FWD", "RWD", "AWD", "4x4"]

export default function AdminAutosPage() {
  const [autos, setAutos] = useState<Auto[]>([])
  const [form, setForm] = useState<AdminAutoFormData>(EMPTY_ADMIN_AUTO_FORM)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string>("")

  const title = useMemo(
    () => (editingId ? `Editando auto #${editingId}` : "Agregar nuevo auto"),
    [editingId]
  )

  const loadAutos = async () => {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/autos", { cache: "no-store" })
      const data = await parseJsonSafe<{ autos?: Auto[]; error?: string }>(res)
      if (!res.ok) throw new Error(data?.error ?? "No se pudo cargar inventario.")
      setAutos(data?.autos ?? [])
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo cargar inventario.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadAutos()
  }, [])

  const onChange = (key: keyof AdminAutoFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const resetForm = () => {
    setForm(EMPTY_ADMIN_AUTO_FORM)
    setEditingId(null)
    setError("")
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")

    try {
      const isEditing = editingId !== null
      const url = isEditing ? `/api/autos/${editingId}` : "/api/autos"
      const method = isEditing ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await parseJsonSafe<{ error?: string }>(res)
      if (!res.ok) throw new Error(data?.error ?? "No se pudo guardar el auto.")

      await loadAutos()
      resetForm()
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo guardar el auto.")
    } finally {
      setSaving(false)
    }
  }

  const onEdit = (auto: Auto) => {
    setEditingId(auto.id)
    setForm(autoToAdminForm(auto))
    setError("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const onDelete = async (id: number) => {
    const ok = window.confirm(`Se eliminara el auto #${id}. Deseas continuar?`)
    if (!ok) return

    setError("")
    try {
      const res = await fetch(`/api/autos/${id}`, { method: "DELETE" })
      const data = await parseJsonSafe<{ error?: string }>(res)
      if (!res.ok) throw new Error(data?.error ?? "No se pudo eliminar el auto.")
      await loadAutos()
      if (editingId === id) resetForm()
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo eliminar el auto.")
    }
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Administrar Inventario</h1>
        <p className="text-sm text-muted-foreground">
          CRUD de autos: agrega, edita y elimina registros.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Titulo">
                <Input value={form.titulo} onChange={(e) => onChange("titulo", e.target.value)} />
              </Field>
              <Field label="Foto URL">
                <Input value={form.foto_url} onChange={(e) => onChange("foto_url", e.target.value)} />
              </Field>
              <Field label="Marca">
                <Input value={form.marca} onChange={(e) => onChange("marca", e.target.value)} />
              </Field>
              <Field label="Modelo">
                <Input value={form.modelo} onChange={(e) => onChange("modelo", e.target.value)} />
              </Field>
              <Field label="Version">
                <Input value={form.version} onChange={(e) => onChange("version", e.target.value)} />
              </Field>
              <Field label="Anio">
                <Input value={form.anio} onChange={(e) => onChange("anio", e.target.value)} />
              </Field>
              <Field label="Tipo">
                <select
                  className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={form.tipo}
                  onChange={(e) => onChange("tipo", e.target.value)}
                >
                  {typeOptions.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Color">
                <Input value={form.color} onChange={(e) => onChange("color", e.target.value)} />
              </Field>
              <Field label="Combustible">
                <select
                  className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={form.combustible}
                  onChange={(e) => onChange("combustible", e.target.value)}
                >
                  {fuelOptions.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Transmision">
                <select
                  className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={form.transmision}
                  onChange={(e) => onChange("transmision", e.target.value)}
                >
                  {transmissionOptions.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Traccion">
                <select
                  className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={form.traccion}
                  onChange={(e) => onChange("traccion", e.target.value)}
                >
                  {tractionOptions.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Kilometraje">
                <Input value={form.kilometraje} onChange={(e) => onChange("kilometraje", e.target.value)} />
              </Field>
              <Field label="Precio">
                <Input value={form.precio_monto} onChange={(e) => onChange("precio_monto", e.target.value)} />
              </Field>
              <Field label="Precio sugerido">
                <Input value={form.precio_sugerido} onChange={(e) => onChange("precio_sugerido", e.target.value)} />
              </Field>
              <Field label="Moneda">
                <Input value={form.precio_moneda} onChange={(e) => onChange("precio_moneda", e.target.value)} />
              </Field>
              <Field label="Puertas">
                <Input
                  value={form.numero_puertas}
                  onChange={(e) => onChange("numero_puertas", e.target.value)}
                />
              </Field>
              <Field label="Pasajeros">
                <Input
                  value={form.capacidad_pasajeros}
                  onChange={(e) => onChange("capacidad_pasajeros", e.target.value)}
                />
              </Field>
              <Field label="Condicion">
                <Input value={form.condicion} onChange={(e) => onChange("condicion", e.target.value)} />
              </Field>
              <Field label="Placa">
                <Input value={form.placa} onChange={(e) => onChange("placa", e.target.value)} />
              </Field>
              <Field label="VIN">
                <Input value={form.vin} onChange={(e) => onChange("vin", e.target.value)} />
              </Field>
              <Field label="Ciudad">
                <Input value={form.ciudad} onChange={(e) => onChange("ciudad", e.target.value)} />
              </Field>
              <Field label="Departamento">
                <Input value={form.departamento} onChange={(e) => onChange("departamento", e.target.value)} />
              </Field>
              <Field label="Repuestos GT">
                <Input
                  value={form.facilidad_repuestos_gt}
                  onChange={(e) => onChange("facilidad_repuestos_gt", e.target.value)}
                />
              </Field>
              <Field label="Estado publicacion">
                <Input
                  value={form.publicacion_estado}
                  onChange={(e) => onChange("publicacion_estado", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Descripcion">
              <textarea
                className="min-h-24 w-full rounded-lg border border-input bg-transparent p-2.5 text-sm"
                value={form.descripcion}
                onChange={(e) => onChange("descripcion", e.target.value)}
              />
            </Field>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <div className="flex flex-wrap gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? "Guardando..." : editingId ? "Actualizar auto" : "Agregar auto"}
              </Button>
              <Button type="button" variant="outline" onClick={resetForm} disabled={saving}>
                Limpiar formulario
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Autos registrados</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {loading ? <p className="text-sm text-muted-foreground">Cargando autos...</p> : null}
          {!loading && autos.length === 0 ? (
            <p className="text-sm text-muted-foreground">No hay autos en el inventario.</p>
          ) : null}
          {autos.map((auto) => (
            <div
              key={auto.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border p-3"
            >
              <div>
                <div className="text-sm font-medium">
                  #{auto.id} {auto.vehiculo.anio} {auto.vehiculo.marca} {auto.vehiculo.modelo}
                </div>
                <div className="text-xs text-muted-foreground">{auto.titulo}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => onEdit(auto)}>
                  Editar
                </Button>
                <Button variant="destructive" size="sm" onClick={() => onDelete(auto.id)}>
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  )
}
