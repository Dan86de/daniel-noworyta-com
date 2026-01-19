# Build & Tooling

## Development Commands

```bash
pnpm dev     # Development server
pnpm build   # Build (includes content-collections build step)
pnpm start   # Production start
pnpm lint    # Lint (auto-fix enabled)
pnpm format  # Format
```

## Biome Configuration

- **Indentation**: Tabs (not spaces)
- Auto-import cleanup on save
- Sorted Tailwind classes via `useSortedClasses` rule
- Excludes `routeTree.gen.ts` from linting
