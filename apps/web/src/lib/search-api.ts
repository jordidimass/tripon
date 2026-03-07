import { searchableAutos, type SearchFilters } from "@tripon/catalog"
import { rankCars, type SearchResponse } from "@tripon/search-core"

function getSearchApiUrl() {
  return (process.env.SEARCH_API_URL ?? "http://127.0.0.1:4000").replace(/\/$/, "")
}

export async function searchCars(filters: SearchFilters, limit = 24): Promise<SearchResponse> {
  const payload = { ...filters, limit }

  try {
    const response = await fetch(`${getSearchApiUrl()}/search`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Search API failed with status ${response.status}`)
    }

    return (await response.json()) as SearchResponse
  } catch {
    const { q = "", ...manualFilters } = filters
    const ranked = rankCars({
      cars: searchableAutos,
      query: q,
      manualFilters,
    })

    return {
      ...ranked,
      semanticEnabled: false,
      results: ranked.results.slice(0, limit),
    }
  }
}
