import { autos } from "@/data/cars";

export type CarFuel = "Gasolina" | "Diesel" | "Hybrid" | "Electric";
export type CarTransmission = "Automatica" | "Mecanica" | "CVT";

export type Car = {
  id: number;
  titulo: string;
  vehiculo: {
    marca: string;
    modelo: string;
    version: string;
    anio: number;
    tipo: "Sedan" | "SUV" | "Pickup" | "Hatchback";
    color: string;
    numero_puertas: number;
    capacidad_pasajeros: number;
    combustible: CarFuel;
    transmision: CarTransmission;
    traccion: "FWD" | "RWD" | "AWD" | "4x4";
    kilometraje: number;
    condicion: string;
  };
  identificacion: {
    placa: string;
    vin: string;
  };
  precio: {
    monto: number;
    moneda: string;
    precio_sugerido: number;
  };
  ubicacion: {
    ciudad: string;
    departamento: string;
  };
  estado: {
    unico_duenio: boolean;
    servicios_al_dia: boolean;
    recien_importado: boolean;
    papeles_en_orden: boolean;
    impuesto_circulacion_pagado: boolean;
    choques_reportados: boolean;
  };
  inspeccion: {
    realizada: boolean;
    resultado: string;
    score_confianza: number;
  };
  vendedor: {
    id: string;
    nombre: string;
    telefono: string;
    whatsapp: string;
    tipo: "Particular" | "Agencia" | "Importadora";
    verificado: boolean;
  };
  publicacion: {
    estado: string;
    fecha_publicacion: string;
    fecha_actualizacion: string;
  };
  descripcion: string;
  facilidad_repuestos_gt: string;
  foto_url: string;
};

export function getCarById(id: string) {
  return autos.find((car) => car.id.toString() === id);
}

export type CarListFilters = {
  q?: string;
  make?: string;
  fuel?: CarFuel;
  transmission?: CarTransmission;
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  onlyDeals?: boolean;
};

export function listCars(filters: CarListFilters = {}) {
  const q = (filters.q ?? "").trim().toLowerCase();

  return autos.filter((car) => {
    if (filters.make && car.vehiculo.marca !== filters.make) return false;
    if (filters.fuel && car.vehiculo.combustible !== filters.fuel) return false;
    if (filters.transmission && car.vehiculo.transmision !== filters.transmission) return false;
    if (typeof filters.priceMin === "number" && car.precio.monto < filters.priceMin) return false;
    if (typeof filters.priceMax === "number" && car.precio.monto > filters.priceMax) return false;
    if (typeof filters.yearMin === "number" && car.vehiculo.anio < filters.yearMin) return false;
    if (filters.onlyDeals && car.estado.recien_importado !== true) return false; // Assuming 'recien_importado' for 'onlyDeals'

    if (q) {
      const haystack = `${car.vehiculo.anio} ${car.vehiculo.marca} ${car.vehiculo.modelo} ${car.vehiculo.tipo} ${car.vehiculo.combustible} ${car.vehiculo.transmision} ${car.vehiculo.traccion} ${car.descripcion}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  }).sort((a, b) => b.vehiculo.anio - a.vehiculo.anio || a.precio.monto - b.precio.monto);
}