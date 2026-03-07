export function formatMoney(amount: number, currency: string, locale = "es-GT") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrency(amount: number) {
  return formatMoney(amount, "USD", "en-US")
}

export function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}
