# Tripon

Monorepo para el MVP de Tripon con búsqueda híbrida de carros.

## Estructura

- `apps/web`: frontend en Next.js
- `apps/search-api`: servicio separado para búsqueda keyword + lenguaje natural
- `packages/catalog`: catálogo compartido y normalización del inventario
- `packages/search-core`: parsing de consultas, filtros e integración del ranking híbrido

## Requisitos

- Node.js 22+
- pnpm 10+

## Instalación

```bash
pnpm install
```

## Variables de entorno

### `apps/web/.env.local`

```bash
SEARCH_API_URL=http://127.0.0.1:4000
```

### `apps/search-api/.env`

```bash
PORT=4000
HF_API_TOKEN=hf_xxx
HF_EMBEDDINGS_MODEL=intfloat/multilingual-e5-base
HF_QUERY_PARSER_MODEL=Qwen/Qwen2.5-1.5B-Instruct
SEARCH_SEMANTIC_WEIGHT=0.45
```

- Si `HF_API_TOKEN` no está configurado, el buscador sigue funcionando con parsing por reglas y ranking keyword.
- Si el token está configurado, el `search-api` añade embeddings con `intfloat/multilingual-e5-base`.
- Si `HF_QUERY_PARSER_MODEL` está configurado, se habilita un fallback opcional con `Qwen/Qwen2.5-1.5B-Instruct` para consultas naturales más ambiguas.

## Desarrollo

Levantar frontend y servicio de búsqueda:

```bash
pnpm dev
```

Levantar solo el frontend:

```bash
pnpm dev:web
```

Levantar solo el servicio de búsqueda:

```bash
pnpm dev:search
```

## Validación

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Despliegue recomendado

- `apps/web` en Vercel
- `apps/search-api` en Railway, Render o Fly.io
- Hugging Face Inference o Endpoints para embeddings en el MVP

La inferencia no corre dentro de Next.js. El frontend consulta al `search-api`, y ese servicio es el que habla con Hugging Face para embeddings y futuras mejoras de reranking.
