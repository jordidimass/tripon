import type { SearchFilters } from "@tripon/catalog";
import { mergeFilters, parseNaturalLanguageQuery, type ParsedQuery } from "@tripon/search-core";

import type { SearchApiEnv } from "./env";

type LlmParserResponse = {
  make?: string;
  fuel?: SearchFilters["fuel"];
  transmission?: SearchFilters["transmission"];
  bodyType?: SearchFilters["bodyType"];
  traction?: SearchFilters["traction"];
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  yearMax?: number;
  mileageMax?: number;
  location?: string;
  onlyDeals?: boolean;
};

function shouldUseLlmFallback(parsedQuery: ParsedQuery, env: SearchApiEnv) {
  if (!env.HF_API_TOKEN || !env.HF_QUERY_PARSER_MODEL || !env.HF_QUERY_PARSER_API_URL) return false;
  if (!parsedQuery.rawQuery.trim()) return false;

  const hasUsefulHeuristicMatch = Object.entries(parsedQuery.inferredFilters).some(([, value]) => {
    if (typeof value === "boolean") return value;
    return value !== undefined;
  });

  return !hasUsefulHeuristicMatch && parsedQuery.tokens.length >= 3;
}

function buildPrompt(query: string) {
  return [
    "You extract car search filters from user queries.",
    "Return only valid JSON with these optional keys:",
    "make, fuel, transmission, bodyType, traction, priceMin, priceMax, yearMin, yearMax, mileageMax, location, onlyDeals.",
    'Allowed fuel values: "gasoline", "diesel", "hybrid", "electric".',
    'Allowed transmission values: "automatic", "manual", "cvt".',
    'Allowed bodyType values: "sedan", "suv", "pickup", "hatchback".',
    'Allowed traction values: "fwd", "rwd", "awd", "4x4".',
    "If a field is not present, omit it.",
    `Query: ${query}`,
  ].join("\n");
}

function parseGeneratedText(payload: unknown) {
  if (!Array.isArray(payload) || payload.length === 0) return undefined;

  const first = payload[0] as { generated_text?: string } | undefined;
  const generatedText = first?.generated_text;
  if (!generatedText) return undefined;

  const jsonStart = generatedText.indexOf("{");
  const jsonEnd = generatedText.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) return undefined;

  try {
    return JSON.parse(generatedText.slice(jsonStart, jsonEnd + 1)) as LlmParserResponse;
  } catch {
    return undefined;
  }
}

function sanitizeFilters(filters: LlmParserResponse | undefined): SearchFilters {
  if (!filters) return {};

  return {
    make: filters.make,
    fuel: ["gasoline", "diesel", "hybrid", "electric"].includes(String(filters.fuel))
      ? filters.fuel
      : undefined,
    transmission: ["automatic", "manual", "cvt"].includes(String(filters.transmission))
      ? filters.transmission
      : undefined,
    bodyType: ["sedan", "suv", "pickup", "hatchback"].includes(String(filters.bodyType))
      ? filters.bodyType
      : undefined,
    traction: ["fwd", "rwd", "awd", "4x4"].includes(String(filters.traction)) ? filters.traction : undefined,
    priceMin: typeof filters.priceMin === "number" ? filters.priceMin : undefined,
    priceMax: typeof filters.priceMax === "number" ? filters.priceMax : undefined,
    yearMin: typeof filters.yearMin === "number" ? filters.yearMin : undefined,
    yearMax: typeof filters.yearMax === "number" ? filters.yearMax : undefined,
    mileageMax: typeof filters.mileageMax === "number" ? filters.mileageMax : undefined,
    location: filters.location,
    onlyDeals: typeof filters.onlyDeals === "boolean" ? filters.onlyDeals : undefined,
  };
}

async function parseWithLlm(query: string, env: SearchApiEnv) {
  if (!env.HF_API_TOKEN || !env.HF_QUERY_PARSER_API_URL) return {};

  const response = await fetch(env.HF_QUERY_PARSER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.HF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: buildPrompt(query),
      parameters: {
        max_new_tokens: 180,
        return_full_text: false,
        temperature: 0.1,
      },
      options: {
        wait_for_model: true,
        use_cache: false,
      },
    }),
  });

  if (!response.ok) return {};
  return sanitizeFilters(parseGeneratedText(await response.json()));
}

export async function resolveQuery(query: string, env: SearchApiEnv) {
  const parsedQuery = parseNaturalLanguageQuery(query);

  if (!shouldUseLlmFallback(parsedQuery, env)) {
    return parsedQuery;
  }

  const llmFilters = await parseWithLlm(query, env);

  return {
    ...parsedQuery,
    inferredFilters: mergeFilters(llmFilters, parsedQuery.inferredFilters),
  };
}
