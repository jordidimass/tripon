import { serve } from "@hono/node-server";
import { getCatalogFacets, searchableAutos, type SearchFilters } from "@tripon/catalog";
import { applyFilters, mergeFilters, rankCars } from "@tripon/search-core";
import { Hono } from "hono";
import { z } from "zod";

import { getEnv } from "./env";
import { resolveQuery } from "./query-parser";
import { clearSemanticCache, ensureCatalogEmbeddings, getSemanticScores } from "./semantic";

const searchRequestSchema = z.object({
  q: z.string().optional().default(""),
  make: z.string().optional(),
  fuel: z.enum(["gasoline", "diesel", "hybrid", "electric"]).optional(),
  transmission: z.enum(["automatic", "manual", "cvt"]).optional(),
  bodyType: z.enum(["sedan", "suv", "pickup", "hatchback"]).optional(),
  traction: z.enum(["fwd", "rwd", "awd", "4x4"]).optional(),
  priceMin: z.number().optional(),
  priceMax: z.number().optional(),
  yearMin: z.number().optional(),
  yearMax: z.number().optional(),
  mileageMax: z.number().optional(),
  location: z.string().optional(),
  onlyDeals: z.boolean().optional(),
  limit: z.number().min(1).max(50).optional().default(24),
});

const parseQuerySchema = z.object({
  q: z.string().min(1),
});

const app = new Hono();
const env = getEnv();

app.get("/health", (context) => {
  return context.json({
    ok: true,
    service: "@tripon/search-api",
    semanticEnabled: Boolean(env.HF_API_TOKEN),
    model: env.HF_EMBEDDINGS_MODEL,
  });
});

app.get("/facets", (context) => {
  return context.json(getCatalogFacets());
});

app.post("/query/parse", async (context) => {
  const payload = parseQuerySchema.parse(await context.req.json());
  return context.json(await resolveQuery(payload.q, env));
});

app.post("/index/rebuild", async (context) => {
  clearSemanticCache();
  const embeddings = await ensureCatalogEmbeddings(env, true);

  return context.json({
    ok: true,
    semanticEnabled: Boolean(env.HF_API_TOKEN),
    model: env.HF_EMBEDDINGS_MODEL,
    indexedCars: embeddings?.size ?? 0,
  });
});

app.post("/search", async (context) => {
  const payload = searchRequestSchema.parse(await context.req.json());
  const { q, limit, ...manualFilters } = payload;

  const parsedQuery = await resolveQuery(q, env);
  const mergedFilters = mergeFilters(parsedQuery.inferredFilters, manualFilters satisfies SearchFilters);
  const candidates = applyFilters(searchableAutos, mergedFilters);
  const semantic = await getSemanticScores(q, candidates, env);
  const ranked = rankCars({
    cars: searchableAutos,
    query: q,
    manualFilters,
    parsedQuery,
    semanticScores: semantic.scores,
    semanticWeight: env.SEARCH_SEMANTIC_WEIGHT,
  });

  return context.json({
    ...ranked,
    semanticEnabled: semantic.enabled,
    model: env.HF_EMBEDDINGS_MODEL,
    results: ranked.results.slice(0, limit),
  });
});

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`Search API listening on http://localhost:${info.port}`);
  }
);
