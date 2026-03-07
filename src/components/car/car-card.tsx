import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/format";

interface Car {
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
    combustible: "Gasolina" | "Diesel" | "Hybrid" | "Electric";
    transmision: "Automatica" | "Mecanica" | "CVT";
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
}

export function CarCard({ car }: { car: Car }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-muted">
        <img
          src={car.foto_url}
          alt={`${car.vehiculo.anio} ${car.vehiculo.marca} ${car.vehiculo.modelo}`}
          width={400}
          height={250}
          className="object-cover w-full h-full"
        />
        <div className="absolute left-3 top-3 flex gap-2">
        </div>
      </div>

      <CardHeader className="gap-2">
        <CardTitle className="text-base">
          {car.vehiculo.anio} {car.vehiculo.marca} {car.vehiculo.modelo}
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{car.vehiculo.tipo}</Badge>
          <Badge variant="outline">{car.vehiculo.combustible}</Badge>
          <Badge variant="outline">{car.vehiculo.transmision}</Badge>
        </div>
      </CardHeader>

      <CardContent className="grid gap-2">
        <div className="flex items-baseline justify-between">
          <div className="text-lg font-semibold tracking-tight">
            {formatCurrency(car.precio.monto)}
          </div>
          <div className="text-xs text-muted-foreground">
            {formatNumber(car.vehiculo.kilometraje)} mi
          </div>
        </div>
        <div className="text-xs text-muted-foreground">{`${car.ubicacion.ciudad}, ${car.ubicacion.departamento}`}</div>
      </CardContent>

      <CardFooter className="justify-between gap-2">
        <Button asChild size="sm" className="w-full">
          <Link href={`/cars/${car.id}`}>View car</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
