# Architecture & Routing

## Framework Stack

TanStack Start (SSR React framework) with Vite, deployed to Vercel.

## Routing System

File-based routing via TanStack Router:
- Routes in `src/routes/` auto-generate `src/routeTree.gen.ts`
- `__root.tsx` - Root layout (theme provider, analytics, header/mobile menu)
- `index.tsx` - Page components export `Route` using `createFileRoute()`
- Dynamic routes use `$param` convention (e.g., `articles/$slug.tsx`)

## Content System

Uses `@content-collections` for MDX articles:
- Articles stored in `content/articles/` as MDX files
- Schema in `content-collections.ts`: title, summary, date, author, status, tags, type
- Build step compiles MDX → importable from `content-collections` package
- Articles have "draft" or "published" status
