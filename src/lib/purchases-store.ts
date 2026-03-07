import { promises as fs } from "node:fs"
import path from "node:path"

export type PurchaseRecord = {
  username: string
  carId: number
  purchasedAt: string
  amount: number
  currency: string
}

const PURCHASES_FILE_PATH = path.join(process.cwd(), "src/data/purchases.json")

async function readPurchasesFile() {
  const raw = await fs.readFile(PURCHASES_FILE_PATH, "utf8")
  const parsed = JSON.parse(raw) as unknown
  if (!Array.isArray(parsed)) return [] as PurchaseRecord[]
  return parsed as PurchaseRecord[]
}

async function writePurchasesFile(purchases: PurchaseRecord[]) {
  await fs.writeFile(PURCHASES_FILE_PATH, `${JSON.stringify(purchases, null, 2)}\n`, "utf8")
}

export async function listPurchasesByUsername(username: string) {
  const purchases = await readPurchasesFile()
  return purchases
    .filter((p) => p.username === username)
    .sort((a, b) => b.purchasedAt.localeCompare(a.purchasedAt))
}

export async function appendPurchase(purchase: PurchaseRecord) {
  const purchases = await readPurchasesFile()
  const next = [...purchases, purchase]
  await writePurchasesFile(next)
  return purchase
}
