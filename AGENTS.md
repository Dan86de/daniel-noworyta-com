# AGENTS.md

Personal website built with TanStack Start (SSR React framework) + Vite, deployed to Vercel.

**Package manager**: `pnpm`

**Key commands**:

```bash
pnpm dev    # Development server
pnpm build  # Production build
```

**Routing**: File-based via TanStack Router (`src/routes/`) - auto-generates `src/routeTree.gen.ts`

**Content**: MDX articles via `@content-collections` package (stored in `content/articles/`)

---

**Detailed guidance**:

- [Architecture & Routing](docs/agents/architecture.md) - Framework details, routing patterns, content system
- [Styling Conventions](docs/agents/styling.md) - Tailwind v4, dark mode, utilities
- [Component Organization](docs/agents/components.md) - Where to find/create components
- [Development Patterns](docs/agents/patterns.md) - Adding routes, rendering articles, SEO, page visibility
- [Build & Tooling](docs/agents/tooling.md) - Linting, formatting, build steps
