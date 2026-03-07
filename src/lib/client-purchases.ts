export const PURCHASES_KEY = "tripon:purchases"

export type PurchaseRecord = {
  username: string
  carId: number
  purchasedAt: string
  amount: number
  currency: string
}

export function readPurchases() {
  if (typeof window === "undefined") return [] as PurchaseRecord[]

  try {
    const raw = localStorage.getItem(PURCHASES_KEY)
    if (!raw) return [] as PurchaseRecord[]
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return [] as PurchaseRecord[]

    return parsed.filter((row): row is PurchaseRecord => {
      return (
        row !== null &&
        typeof row === "object" &&
        typeof (row as PurchaseRecord).username === "string" &&
        typeof (row as PurchaseRecord).carId === "number" &&
        typeof (row as PurchaseRecord).purchasedAt === "string" &&
        typeof (row as PurchaseRecord).amount === "number" &&
        typeof (row as PurchaseRecord).currency === "string"
      )
    })
  } catch {
    return [] as PurchaseRecord[]
  }
}

export function appendPurchase(purchase: PurchaseRecord) {
  const purchases = readPurchases()
  const next = [...purchases, purchase]
  localStorage.setItem(PURCHASES_KEY, JSON.stringify(next))
}
