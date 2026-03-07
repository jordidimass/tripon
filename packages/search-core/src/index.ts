import {
  bodyTypeSynonyms,
  fuelSynonyms,
  normalizeSearchText,
  searchableAutos,
  tractionSynonyms,
  transmissionSynonyms,
  type SearchFilters,
  type SearchableAuto,
} from "@tripon/catalog";

export type ParsedQuery = {
  rawQuery: string;
  normalizedQuery: string;
  residualQuery: string;
  tokens: string[];
  inferredFilters: SearchFilters;
};

export type SearchResult = {
  car: SearchableAuto["raw"];
  score: number;
  lexicalScore: number;
  semanticScore: number;
  matchReasons: string[];
};

export type SearchResponse = {
  query: string;
  appliedFilters: SearchFilters;
  inferredFilters: SearchFilters;
  total: number;
  semanticEnabled: boolean;
  results: SearchResult[];
};

const STOP_WORDS = new Set([
  "de",
  "del",
  "la",
  "el",
  "los",
  "las",
  "para",
  "con",
  "y",
  "o",
  "un",
  "una",
  "que",
]);

function tokenize(value: string) {
  return normalizeSearchText(value)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function detectPriceMax(query: string) {
  const patterns = [
    /menos de\s+(\d{4,6})/,
    /max(?:imo)?\s+(\d{4,6})/,
    /hasta\s+(\d{4,6})/,
    /under\s+(\d{4,6})/,
  ];

  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match) return Number(match[1]);
  }

  return undefined;
}

function detectPriceMin(query: string) {
  const patterns = [/desde\s+(\d{4,6})/, /arriba de\s+(\d{4,6})/, /above\s+(\d{4,6})/];

  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match) return Number(match[1]);
  }

  return undefined;
}

function detectYearMin(query: string) {
  const patterns = [/(\d{4})\+/, /desde\s+(20\d{2}|19\d{2})/, /after\s+(20\d{2}|19\d{2})/];

  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match) return Number(match[1]);
  }

  return undefined;
}

function detectMileageMax(query: string) {
  const patterns = [
    /menos de\s+(\d{2,6})\s*(?:km|kms|kilometros|kilómetros)/,
    /hasta\s+(\d{2,6})\s*(?:km|kms|kilometros|kilómetros)/,
    /under\s+(\d{2,6})\s*(?:km|miles)/,
  ];

  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match) return Number(match[1]);
  }

  return undefined;
}

function matchSynonym<T extends string>(query: string, entries: Record<T, string[]>) {
  for (const [key, values] of Object.entries(entries) as [T, string[]][]) {
    if (values.some((value) => query.includes(normalizeSearchText(value)))) {
      return key;
    }
  }

  return undefined;
}

function detectMake(query: string, cars: SearchableAuto[]) {
  const makes = [...new Set(cars.map((car) => car.make))];
  return makes.find((make) => query.includes(normalizeSearchText(make)));
}

function detectLocation(query: string, cars: SearchableAuto[]) {
  const values = [
    ...new Set(
      cars.flatMap((car) => [car.locationCity, car.locationDepartment]).map((entry) => normalizeSearchText(entry))
    ),
  ];

  return values.find((value) => query.includes(value));
}

export function parseNaturalLanguageQuery(query: string, cars = searchableAutos): ParsedQuery {
  const normalizedQuery = normalizeSearchText(query);
  const inferredFilters: SearchFilters = {
    make: detectMake(normalizedQuery, cars),
    fuel: matchSynonym(normalizedQuery, fuelSynonyms),
    transmission: matchSynonym(normalizedQuery, transmissionSynonyms),
    bodyType: matchSynonym(normalizedQuery, bodyTypeSynonyms),
    traction: matchSynonym(normalizedQuery, tractionSynonyms),
    priceMin: detectPriceMin(normalizedQuery),
    priceMax: detectPriceMax(normalizedQuery),
    yearMin: detectYearMin(normalizedQuery),
    mileageMax: detectMileageMax(normalizedQuery),
    location: detectLocation(normalizedQuery, cars),
    onlyDeals:
      normalizedQuery.includes("oferta") ||
      normalizedQuery.includes("deal") ||
      normalizedQuery.includes("mejor valor") ||
      normalizedQuery.includes("verificado"),
  };

  const residualTokens = tokenize(normalizedQuery).filter((token) => {
    const values = Object.values(inferredFilters).filter(Boolean).map((entry) => normalizeSearchText(String(entry)));
    return !values.some((value) => value.includes(token) || token.includes(value));
  });

  return {
    rawQuery: query,
    normalizedQuery,
    residualQuery: residualTokens.join(" "),
    tokens: residualTokens,
    inferredFilters,
  };
}

export function mergeFilters(inferredFilters: SearchFilters, manualFilters: SearchFilters): SearchFilters {
  return {
    ...inferredFilters,
    ...manualFilters,
    q: manualFilters.q ?? inferredFilters.q,
  };
}

export function applyFilters(cars: SearchableAuto[], filters: SearchFilters) {
  return cars.filter((car) => {
    if (filters.make && car.make !== filters.make) return false;
    if (filters.fuel && car.fuel !== filters.fuel) return false;
    if (filters.transmission && car.transmission !== filters.transmission) return false;
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false;
    if (filters.traction && car.traction !== filters.traction) return false;
    if (typeof filters.priceMin === "number" && car.price < filters.priceMin) return false;
    if (typeof filters.priceMax === "number" && car.price > filters.priceMax) return false;
    if (typeof filters.yearMin === "number" && car.year < filters.yearMin) return false;
    if (typeof filters.yearMax === "number" && car.year > filters.yearMax) return false;
    if (typeof filters.mileageMax === "number" && car.mileage > filters.mileageMax) return false;
    if (filters.location) {
      const normalizedLocation = normalizeSearchText(filters.location);
      const carLocation = normalizeSearchText(`${car.locationCity} ${car.locationDepartment}`);
      if (!carLocation.includes(normalizedLocation)) return false;
    }
    if (filters.onlyDeals && !car.onlyDeal) return false;
    return true;
  });
}

export function scoreLexicalMatch(car: SearchableAuto, parsedQuery: ParsedQuery) {
  if (!parsedQuery.normalizedQuery) return { score: 0, reasons: [] as string[] };

  let score = 0;
  const reasons: string[] = [];

  if (parsedQuery.residualQuery && car.searchableText.includes(parsedQuery.residualQuery)) {
    score += 8;
    reasons.push("phrase");
  }

  for (const token of parsedQuery.tokens) {
    if (`${normalizeSearchText(car.make)} ${normalizeSearchText(car.model)}`.includes(token)) {
      score += 4;
      reasons.push(`modelo:${token}`);
      continue;
    }

    if (normalizeSearchText(car.version).includes(token)) {
      score += 3;
      reasons.push(`version:${token}`);
      continue;
    }

    if (car.searchableText.includes(token)) {
      score += 1.5;
      reasons.push(`texto:${token}`);
    }
  }

  return { score, reasons };
}

export function cosineSimilarity(left: number[], right: number[]) {
  if (left.length === 0 || right.length === 0 || left.length !== right.length) return 0;

  let dotProduct = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (let index = 0; index < left.length; index += 1) {
    dotProduct += left[index] * right[index];
    leftMagnitude += left[index] * left[index];
    rightMagnitude += right[index] * right[index];
  }

  if (leftMagnitude === 0 || rightMagnitude === 0) return 0;
  return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}

export function rankCars({
  cars,
  query,
  manualFilters,
  parsedQuery: parsedQueryOverride,
  semanticScores = new Map<number, number>(),
  semanticWeight = 0.45,
}: {
  cars: SearchableAuto[];
  query: string;
  manualFilters: SearchFilters;
  parsedQuery?: ParsedQuery;
  semanticScores?: Map<number, number>;
  semanticWeight?: number;
}) {
  const parsedQuery = parsedQueryOverride ?? parseNaturalLanguageQuery(query, cars);
  const appliedFilters = mergeFilters(parsedQuery.inferredFilters, manualFilters);
  const filteredCars = applyFilters(cars, appliedFilters);

  const results = filteredCars
    .map((car) => {
      const lexical = scoreLexicalMatch(car, parsedQuery);
      const semanticScore = semanticScores.get(car.id) ?? 0;
      const score = lexical.score * (1 - semanticWeight) + semanticScore * 10 * semanticWeight;

      return {
        car: car.raw,
        score,
        lexicalScore: lexical.score,
        semanticScore,
        matchReasons: lexical.reasons,
      } satisfies SearchResult;
    })
    .sort((left, right) => right.score - left.score || right.car.vehiculo.anio - left.car.vehiculo.anio);

  return {
    query,
    inferredFilters: parsedQuery.inferredFilters,
    appliedFilters,
    total: results.length,
    results,
  };
}
