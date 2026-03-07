import type { Auto } from "@/data/cars"
import type { AdminAutoInput } from "@/lib/autos-store"

export type AdminAutoFormData = {
  titulo: string
  marca: string
  modelo: string
  version: string
  anio: string
  tipo: Auto["vehiculo"]["tipo"]
  color: string
  numero_puertas: string
  capacidad_pasajeros: string
  combustible: Auto["vehiculo"]["combustible"]
  transmision: Auto["vehiculo"]["transmision"]
  traccion: Auto["vehiculo"]["traccion"]
  kilometraje: string
  condicion: string
  placa: string
  vin: string
  precio_monto: string
  precio_moneda: string
  precio_sugerido: string
  ciudad: string
  departamento: string
  descripcion: string
  facilidad_repuestos_gt: string
  foto_url: string
  publicacion_estado: string
}

export const EMPTY_ADMIN_AUTO_FORM: AdminAutoFormData = {
  titulo: "",
  marca: "",
  modelo: "",
  version: "",
  anio: "",
  tipo: "Sedan",
  color: "",
  numero_puertas: "4",
  capacidad_pasajeros: "5",
  combustible: "Gasolina",
  transmision: "Automatica",
  traccion: "FWD",
  kilometraje: "0",
  condicion: "Usado",
  placa: "",
  vin: "",
  precio_monto: "0",
  precio_moneda: "GTQ",
  precio_sugerido: "0",
  ciudad: "",
  departamento: "",
  descripcion: "",
  facilidad_repuestos_gt: "Media",
  foto_url: "",
  publicacion_estado: "Disponible",
}

export function autoToAdminForm(auto: Auto): AdminAutoFormData {
  return {
    titulo: auto.titulo,
    marca: auto.vehiculo.marca,
    modelo: auto.vehiculo.modelo,
    version: auto.vehiculo.version,
    anio: String(auto.vehiculo.anio),
    tipo: auto.vehiculo.tipo,
    color: auto.vehiculo.color,
    numero_puertas: String(auto.vehiculo.numero_puertas),
    capacidad_pasajeros: String(auto.vehiculo.capacidad_pasajeros),
    combustible: auto.vehiculo.combustible,
    transmision: auto.vehiculo.transmision,
    traccion: auto.vehiculo.traccion,
    kilometraje: String(auto.vehiculo.kilometraje),
    condicion: auto.vehiculo.condicion,
    placa: auto.identificacion.placa,
    vin: auto.identificacion.vin,
    precio_monto: String(auto.precio.monto),
    precio_moneda: auto.precio.moneda,
    precio_sugerido: String(auto.precio.precio_sugerido),
    ciudad: auto.ubicacion.ciudad,
    departamento: auto.ubicacion.departamento,
    descripcion: auto.descripcion,
    facilidad_repuestos_gt: auto.facilidad_repuestos_gt,
    foto_url: auto.foto_url,
    publicacion_estado: auto.publicacion.estado,
  }
}

function required(fieldName: string, value: string) {
  if (!value.trim()) {
    throw new Error(`El campo ${fieldName} es requerido.`)
  }
  return value.trim()
}

function numberField(fieldName: string, value: string) {
  const n = Number(value)
  if (!Number.isFinite(n)) {
    throw new Error(`El campo ${fieldName} debe ser numerico.`)
  }
  return n
}

export function adminFormToInput(form: AdminAutoFormData): AdminAutoInput {
  return {
    titulo: required("titulo", form.titulo),
    marca: required("marca", form.marca),
    modelo: required("modelo", form.modelo),
    version: required("version", form.version),
    anio: numberField("anio", form.anio),
    tipo: form.tipo,
    color: required("color", form.color),
    numero_puertas: numberField("numero_puertas", form.numero_puertas),
    capacidad_pasajeros: numberField("capacidad_pasajeros", form.capacidad_pasajeros),
    combustible: form.combustible,
    transmision: form.transmision,
    traccion: form.traccion,
    kilometraje: numberField("kilometraje", form.kilometraje),
    condicion: required("condicion", form.condicion),
    placa: required("placa", form.placa),
    vin: required("vin", form.vin),
    precio_monto: numberField("precio_monto", form.precio_monto),
    precio_moneda: required("precio_moneda", form.precio_moneda),
    precio_sugerido: numberField("precio_sugerido", form.precio_sugerido),
    ciudad: required("ciudad", form.ciudad),
    departamento: required("departamento", form.departamento),
    descripcion: required("descripcion", form.descripcion),
    facilidad_repuestos_gt: required("facilidad_repuestos_gt", form.facilidad_repuestos_gt),
    foto_url: required("foto_url", form.foto_url),
    publicacion_estado: required("publicacion_estado", form.publicacion_estado),
  }
}
