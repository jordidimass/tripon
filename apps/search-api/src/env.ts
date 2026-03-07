import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  HF_API_TOKEN: z.string().min(1).optional(),
  HF_EMBEDDINGS_MODEL: z.string().default("intfloat/multilingual-e5-base"),
  HF_EMBEDDINGS_API_URL: z.string().url().optional(),
  HF_QUERY_PARSER_MODEL: z.string().optional(),
  HF_QUERY_PARSER_API_URL: z.string().url().optional(),
  SEARCH_SEMANTIC_WEIGHT: z.coerce.number().min(0).max(1).default(0.45),
});

export type SearchApiEnv = z.infer<typeof envSchema>;

let cachedEnv: SearchApiEnv | undefined;

export function getEnv() {
  if (cachedEnv) return cachedEnv;

  const parsed = envSchema.parse(process.env);
  cachedEnv = {
    ...parsed,
    HF_EMBEDDINGS_API_URL:
      parsed.HF_EMBEDDINGS_API_URL ??
      `https://api-inference.huggingface.co/models/${parsed.HF_EMBEDDINGS_MODEL}`,
    HF_QUERY_PARSER_API_URL:
      parsed.HF_QUERY_PARSER_API_URL ??
      (parsed.HF_QUERY_PARSER_MODEL
        ? `https://api-inference.huggingface.co/models/${parsed.HF_QUERY_PARSER_MODEL}`
        : undefined),
  };

  return cachedEnv;
}
