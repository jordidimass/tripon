import rawAutos from "./cars.json"

export type Auto = (typeof rawAutos)[number]

export const autos = rawAutos as Auto[]
