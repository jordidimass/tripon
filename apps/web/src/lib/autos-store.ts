import { promises as fs } from "node:fs"
import path from "node:path"

import type { Auto } from "@/data/cars"
import type { CarFilters } from "@/lib/car-filters"

const AUTOS_FILE_PATH = path.join(process.cwd(), "src/data/cars.json")

export type AdminAutoInput = {
  titulo: string
  marca: string
  modelo: string
  version: string
  anio: number
  tipo: Auto["vehiculo"]["tipo"]
  color: string
  numero_puertas: number
  capacidad_pasajeros: number
  combustible: Auto["vehiculo"]["combustible"]
  transmision: Auto["vehiculo"]["transmision"]
  traccion: Auto["vehiculo"]["traccion"]
  kilometraje: number
  condicion: string
  placa: string
  vin: string
  precio_monto: number
  precio_moneda: string
  precio_sugerido: number
  ciudad: string
  departamento: string
  descripcion: string
  facilidad_repuestos_gt: string
  foto_url: string
  publicacion_estado: string
}

async function readAutosFile() {
  const raw = await fs.readFile(AUTOS_FILE_PATH, "utf8")
  const parsed = JSON.parse(raw) as unknown

  if (!Array.isArray(parsed)) {
    return [] as Auto[]
  }

  return parsed as Auto[]
}

async function writeAutosFile(autos: Auto[]) {
  await fs.writeFile(AUTOS_FILE_PATH, `${JSON.stringify(autos, null, 2)}\n`, "utf8")
}

function nextId(autos: Auto[]) {
  return autos.reduce((max, auto) => Math.max(max, auto.id), 0) + 1
}

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function buildAutoPayload(input: AdminAutoInput, id: number, existing?: Auto): Auto {
  const today = todayISO()
  const defaultSellerId = `U${String(id).padStart(3, "0")}`

  return {
    id,
    titulo: input.titulo,
    vehiculo: {
      marca: input.marca,
      modelo: input.modelo,
      version: input.version,
      anio: input.anio,
      tipo: input.tipo,
      color: input.color,
      numero_puertas: input.numero_puertas,
      capacidad_pasajeros: input.capacidad_pasajeros,
      combustible: input.combustible,
      transmision: input.transmision,
      traccion: input.traccion,
      kilometraje: input.kilometraje,
      condicion: input.condicion,
    },
    identificacion: {
      placa: input.placa,
      vin: input.vin,
    },
    precio: {
      monto: input.precio_monto,
      moneda: input.precio_moneda,
      precio_sugerido: input.precio_sugerido,
    },
    ubicacion: {
      ciudad: input.ciudad,
      departamento: input.departamento,
    },
    estado: existing?.estado ?? {
      unico_duenio: false,
      servicios_al_dia: false,
      recien_importado: false,
      papeles_en_orden: true,
      impuesto_circulacion_pagado: true,
      choques_reportados: false,
    },
    inspeccion: existing?.inspeccion ?? {
      realizada: false,
      resultado: "Pendiente",
      score_confianza: 0,
    },
    vendedor: existing?.vendedor ?? {
      id: defaultSellerId,
      nombre: "Administrador",
      telefono: "",
      whatsapp: "",
      tipo: "Agencia",
      verificado: true,
    },
    publicacion: {
      estado: input.publicacion_estado,
      fecha_publicacion: existing?.publicacion.fecha_publicacion ?? today,
      fecha_actualizacion: today,
    },
    descripcion: input.descripcion,
    facilidad_repuestos_gt: input.facilidad_repuestos_gt,
    foto_url: input.foto_url,
  }
}

export async function getAllAutos() {
  return readAutosFile()
}

export async function getAutoById(id: string) {
  const n = Number(id)
  if (!Number.isFinite(n)) return undefined
  const autos = await readAutosFile()
  return autos.find((a) => a.id === n)
}

export async function listAutos(filters: CarFilters) {
  const q = (filters.q ?? "").trim().toLowerCase()
  const autos = await readAutosFile()

  return autos
    .filter((a) => {
      if (a.publicacion.estado === "Adquirido") return false

      if (filters.make && a.vehiculo.marca !== filters.make) return false
      if (filters.fuel && a.vehiculo.combustible !== filters.fuel) return false
      if (filters.transmission && a.vehiculo.transmision !== filters.transmission) return false

      if (typeof filters.priceMin === "number" && a.precio.monto < filters.priceMin) return false
      if (typeof filters.priceMax === "number" && a.precio.monto > filters.priceMax) return false
      if (typeof filters.yearMin === "number" && a.vehiculo.anio < filters.yearMin) return false

      if (filters.onlyDeals) {
        if (!a.inspeccion?.realizada) return false
        if ((a.inspeccion?.score_confianza ?? 0) < 90) return false
      }

      if (q) {
        const haystack = [
          a.titulo,
          a.descripcion,
          a.vehiculo.marca,
          a.vehiculo.modelo,
          a.vehiculo.version,
          a.vehiculo.tipo,
          a.vehiculo.color,
          a.vehiculo.combustible,
          a.vehiculo.transmision,
          a.vehiculo.traccion,
          a.ubicacion.ciudad,
          a.ubicacion.departamento,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()

        if (!haystack.includes(q)) return false
      }

      return true
    })
    .sort((a, b) => b.vehiculo.anio - a.vehiculo.anio || a.precio.monto - b.precio.monto)
}

export async function createAuto(input: AdminAutoInput) {
  const autos = await readAutosFile()
  const id = nextId(autos)
  const created = buildAutoPayload(input, id)
  const nextAutos = [...autos, created]
  await writeAutosFile(nextAutos)
  return created
}

export async function updateAuto(id: string, input: AdminAutoInput) {
  const n = Number(id)
  if (!Number.isFinite(n)) return undefined

  const autos = await readAutosFile()
  const idx = autos.findIndex((a) => a.id === n)
  if (idx < 0) return undefined

  const current = autos[idx]
  const updated = buildAutoPayload(input, n, current)
  autos[idx] = updated
  await writeAutosFile(autos)
  return updated
}

export async function deleteAuto(id: string) {
  const n = Number(id)
  if (!Number.isFinite(n)) return false

  const autos = await readAutosFile()
  const nextAutos = autos.filter((a) => a.id !== n)
  if (nextAutos.length === autos.length) return false

  await writeAutosFile(nextAutos)
  return true
}

export async function markAutoAsAcquired(id: string) {
  const n = Number(id)
  if (!Number.isFinite(n)) return { ok: false as const, reason: "invalid-id" as const }

  const autos = await readAutosFile()
  const idx = autos.findIndex((a) => a.id === n)
  if (idx < 0) return { ok: false as const, reason: "not-found" as const }

  const current = autos[idx]
  if (current.publicacion.estado === "Adquirido") {
    return { ok: false as const, reason: "already-acquired" as const }
  }

  autos[idx] = {
    ...current,
    publicacion: {
      ...current.publicacion,
      estado: "Adquirido",
      fecha_actualizacion: todayISO(),
    },
  }

  await writeAutosFile(autos)
  return { ok: true as const, auto: autos[idx] }
}
