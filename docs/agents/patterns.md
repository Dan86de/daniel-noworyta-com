# Development Patterns

## Adding New Routes

1. Create file in `src/routes/[name]/index.tsx`
2. Export route using `createFileRoute()`
3. Add to `src/lib/pages.ts` with status flag
4. TanStack Router auto-generates route tree on next build

## Page Visibility

`src/lib/pages.ts` centralizes navigation config with status flags:
- Pages marked as "active" appear in navigation
- "draft" pages hidden (except playground in dev mode)
- Update this file to control which routes appear in header/mobile menu

## Article Rendering

Articles use loader pattern to fetch from content-collections, then render MDX via `<Mdx>` component.

## SEO

Meta tags configured per-route via `head()` function in route definition (see `__root.tsx` for default meta).
