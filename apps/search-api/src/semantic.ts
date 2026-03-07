import { searchableAutos, type SearchableAuto } from "@tripon/catalog";
import { cosineSimilarity } from "@tripon/search-core";

import type { SearchApiEnv } from "./env";

type EmbeddingVector = number[];
type EmbeddingRecord = Map<number, EmbeddingVector>;

let cachedEmbeddings: EmbeddingRecord | undefined;

function buildSemanticPassage(car: SearchableAuto) {
  return [
    `title: ${car.title}`,
    `make: ${car.make}`,
    `model: ${car.model}`,
    `version: ${car.version}`,
    `body: ${car.bodyType}`,
    `fuel: ${car.fuel}`,
    `transmission: ${car.transmission}`,
    `traction: ${car.traction}`,
    `price: ${car.price}`,
    `mileage: ${car.mileage}`,
    `location: ${car.locationCity}, ${car.locationDepartment}`,
    `seller: ${car.sellerType}`,
    `details: ${car.searchableText}`,
  ].join("\n");
}

function meanPoolEmbedding(matrix: number[][]) {
  const dimensions = matrix[0]?.length ?? 0;
  if (dimensions === 0) return [];

  const pooled = new Array(dimensions).fill(0);

  for (const row of matrix) {
    for (let index = 0; index < dimensions; index += 1) {
      pooled[index] += row[index];
    }
  }

  return pooled.map((value) => value / matrix.length);
}

function toVectors(payload: unknown): EmbeddingVector[] {
  if (!Array.isArray(payload)) return [];
  if (payload.length === 0) return [];

  const first = payload[0];
  if (typeof first === "number") return [payload as number[]];

  if (Array.isArray(first) && typeof first[0] === "number") {
    return [meanPoolEmbedding(payload as number[][])];
  }

  if (Array.isArray(first) && Array.isArray(first[0])) {
    return (payload as number[][][]).map((entry) => meanPoolEmbedding(entry));
  }

  return [];
}

async function embedTexts(inputs: string[], env: SearchApiEnv) {
  if (!env.HF_API_TOKEN) return [];

  const response = await fetch(env.HF_EMBEDDINGS_API_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.HF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs,
      options: {
        wait_for_model: true,
        use_cache: true,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Hugging Face embeddings request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as unknown;
  return toVectors(payload);
}

export function clearSemanticCache() {
  cachedEmbeddings = undefined;
}

export async function ensureCatalogEmbeddings(env: SearchApiEnv, force = false) {
  if (!env.HF_API_TOKEN) return undefined;
  if (cachedEmbeddings && !force) return cachedEmbeddings;

  const vectors = await embedTexts(
    searchableAutos.map((car) => `passage: ${buildSemanticPassage(car)}`),
    env
  );

  cachedEmbeddings = new Map(
    searchableAutos.map((car, index) => [car.id, vectors[index] ?? []] satisfies [number, EmbeddingVector])
  );

  return cachedEmbeddings;
}

export async function getSemanticScores(query: string, candidates: SearchableAuto[], env: SearchApiEnv) {
  if (!env.HF_API_TOKEN || !query.trim()) {
    return {
      enabled: false,
      scores: new Map<number, number>(),
    };
  }

  const [queryVector] = await embedTexts([`query: ${query}`], env);
  const catalogEmbeddings = await ensureCatalogEmbeddings(env);

  if (!queryVector || !catalogEmbeddings) {
    return {
      enabled: false,
      scores: new Map<number, number>(),
    };
  }

  const scores = new Map<number, number>();

  for (const candidate of candidates) {
    const documentVector = catalogEmbeddings.get(candidate.id) ?? [];
    scores.set(candidate.id, cosineSimilarity(queryVector, documentVector));
  }

  return {
    enabled: true,
    scores,
  };
}
