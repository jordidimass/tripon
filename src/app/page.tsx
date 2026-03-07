import { listAutos } from "@/lib/inventory"
import { HomePageClient } from "@/components/car/home-page-client"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const autos = await listAutos({})
  return <HomePageClient initialAutos={autos} />
}
