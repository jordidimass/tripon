import rawAutos from "./cars.json";

export type Auto = (typeof rawAutos)[number];

export type FuelId = "gasoline" | "diesel" | "hybrid" | "electric";
export type TransmissionId = "automatic" | "manual" | "cvt";
export type BodyTypeId = "sedan" | "suv" | "pickup" | "hatchback";

export type SearchFilters = {
  q?: string;
  make?: string;
  fuel?: FuelId;
  transmission?: TransmissionId;
  bodyType?: BodyTypeId;
  traction?: "fwd" | "rwd" | "awd" | "4x4";
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  yearMax?: number;
  mileageMax?: number;
  location?: string;
  onlyDeals?: boolean;
};

export type SearchableAuto = {
  id: number;
  raw: Auto;
  title: string;
  year: number;
  make: string;
  model: string;
  version: string;
  bodyType: BodyTypeId;
  fuel: FuelId;
  transmission: TransmissionId;
  traction: "fwd" | "rwd" | "awd" | "4x4";
  price: number;
  currency: string;
  mileage: number;
  locationCity: string;
  locationDepartment: string;
  sellerType: string;
  onlyDeal: boolean;
  searchableText: string;
  searchAliases: string[];
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export const fuelSynonyms: Record<FuelId, string[]> = {
  gasoline: ["gasolina", "gas", "nafta", "petrol"],
  diesel: ["diesel", "diésel", "turbo diesel", "turbo-diesel"],
  hybrid: ["hybrid", "hibrido", "híbrido"],
  electric: ["electric", "electrico", "eléctrico", "ev"],
};

export const transmissionSynonyms: Record<TransmissionId, string[]> = {
  automatic: ["automatica", "automatica", "automatico", "automático", "auto"],
  manual: ["mecanica", "mecánica", "manual"],
  cvt: ["cvt"],
};

export const bodyTypeSynonyms: Record<BodyTypeId, string[]> = {
  sedan: ["sedan", "sedán"],
  suv: ["suv", "camioneta", "familiar"],
  pickup: ["pickup", "pick up", "pick-up", "doble cabina"],
  hatchback: ["hatchback", "compacto", "city car"],
};

export const tractionSynonyms: Record<SearchableAuto["traction"], string[]> = {
  fwd: ["fwd", "traccion delantera", "tracción delantera"],
  rwd: ["rwd", "traccion trasera", "tracción trasera"],
  awd: ["awd", "all wheel drive"],
  "4x4": ["4x4", "4wd", "doble traccion", "doble tracción"],
};

function normalizeFuel(value: string): FuelId {
  const normalized = normalizeText(value);
  if (fuelSynonyms.diesel.some((entry) => normalized.includes(normalizeText(entry)))) return "diesel";
  if (fuelSynonyms.hybrid.some((entry) => normalized.includes(normalizeText(entry)))) return "hybrid";
  if (fuelSynonyms.electric.some((entry) => normalized.includes(normalizeText(entry)))) return "electric";
  return "gasoline";
}

function normalizeTransmission(value: string): TransmissionId {
  const normalized = normalizeText(value);
  if (transmissionSynonyms.cvt.some((entry) => normalized.includes(normalizeText(entry)))) return "cvt";
  if (transmissionSynonyms.manual.some((entry) => normalized.includes(normalizeText(entry)))) return "manual";
  return "automatic";
}

function normalizeBodyType(value: string): BodyTypeId {
  const normalized = normalizeText(value);
  if (bodyTypeSynonyms.pickup.some((entry) => normalized.includes(normalizeText(entry)))) return "pickup";
  if (bodyTypeSynonyms.suv.some((entry) => normalized.includes(normalizeText(entry)))) return "suv";
  if (bodyTypeSynonyms.hatchback.some((entry) => normalized.includes(normalizeText(entry)))) return "hatchback";
  return "sedan";
}

function normalizeTraction(value: string): SearchableAuto["traction"] {
  const normalized = normalizeText(value);
  if (normalized.includes("4x4")) return "4x4";
  if (normalized.includes("awd")) return "awd";
  if (normalized.includes("rwd")) return "rwd";
  return "fwd";
}

function buildAliases(auto: Auto) {
  const aliases = [
    auto.titulo,
    auto.vehiculo.marca,
    auto.vehiculo.modelo,
    auto.vehiculo.version,
    auto.vehiculo.tipo,
    auto.vehiculo.combustible,
    auto.vehiculo.transmision,
    auto.vehiculo.traccion,
    auto.descripcion,
    auto.ubicacion.ciudad,
    auto.ubicacion.departamento,
  ];

  const fuel = normalizeFuel(auto.vehiculo.combustible);
  const transmission = normalizeTransmission(auto.vehiculo.transmision);
  const bodyType = normalizeBodyType(auto.vehiculo.tipo);
  const traction = normalizeTraction(auto.vehiculo.traccion);

  return [
    ...aliases,
    ...fuelSynonyms[fuel],
    ...transmissionSynonyms[transmission],
    ...bodyTypeSynonyms[bodyType],
    ...tractionSynonyms[traction],
  ];
}

function toSearchableAuto(auto: Auto): SearchableAuto {
  const searchAliases = buildAliases(auto);

  return {
    id: auto.id,
    raw: auto,
    title: `${auto.vehiculo.anio} ${auto.vehiculo.marca} ${auto.vehiculo.modelo} ${auto.vehiculo.version}`.trim(),
    year: auto.vehiculo.anio,
    make: auto.vehiculo.marca,
    model: auto.vehiculo.modelo,
    version: auto.vehiculo.version,
    bodyType: normalizeBodyType(auto.vehiculo.tipo),
    fuel: normalizeFuel(auto.vehiculo.combustible),
    transmission: normalizeTransmission(auto.vehiculo.transmision),
    traction: normalizeTraction(auto.vehiculo.traccion),
    price: auto.precio.monto,
    currency: auto.precio.moneda,
    mileage: auto.vehiculo.kilometraje,
    locationCity: auto.ubicacion.ciudad,
    locationDepartment: auto.ubicacion.departamento,
    sellerType: auto.vendedor.tipo,
    onlyDeal: Boolean(auto.inspeccion?.realizada) && (auto.inspeccion?.score_confianza ?? 0) >= 90,
    searchAliases,
    searchableText: normalizeText(
      [
        auto.titulo,
        auto.descripcion,
        auto.vehiculo.marca,
        auto.vehiculo.modelo,
        auto.vehiculo.version,
        auto.vehiculo.tipo,
        auto.vehiculo.color,
        auto.vehiculo.combustible,
        auto.vehiculo.transmision,
        auto.vehiculo.traccion,
        auto.vehiculo.condicion,
        auto.ubicacion.ciudad,
        auto.ubicacion.departamento,
        auto.vendedor.tipo,
        auto.facilidad_repuestos_gt,
        ...searchAliases,
      ].join(" ")
    ),
  };
}

export const autos = rawAutos as Auto[];
export const searchableAutos = autos.map(toSearchableAuto);

export function getAutoById(id: string | number) {
  const numericId = typeof id === "string" ? Number(id) : id;
  if (!Number.isFinite(numericId)) return undefined;
  return autos.find((auto) => auto.id === numericId);
}

export function getSearchableAutoById(id: string | number) {
  const numericId = typeof id === "string" ? Number(id) : id;
  if (!Number.isFinite(numericId)) return undefined;
  return searchableAutos.find((auto) => auto.id === numericId);
}

export function getCatalogFacets() {
  return {
    makes: [...new Set(searchableAutos.map((auto) => auto.make))].sort(),
    fuels: [...new Set(searchableAutos.map((auto) => auto.fuel))],
    transmissions: [...new Set(searchableAutos.map((auto) => auto.transmission))],
    bodyTypes: [...new Set(searchableAutos.map((auto) => auto.bodyType))],
  };
}

export function toDisplayFuel(fuel: FuelId) {
  return {
    gasoline: "Gasolina",
    diesel: "Diesel",
    hybrid: "Hibrido",
    electric: "Electrico",
  }[fuel];
}

export function toDisplayTransmission(transmission: TransmissionId) {
  return {
    automatic: "Automatica",
    manual: "Mecanica",
    cvt: "CVT",
  }[transmission];
}

export function toDisplayBodyType(bodyType: BodyTypeId) {
  return {
    sedan: "Sedan",
    suv: "SUV",
    pickup: "Pickup",
    hatchback: "Hatchback",
  }[bodyType];
}

export function normalizeSearchText(value: string) {
  return normalizeText(value);
}
