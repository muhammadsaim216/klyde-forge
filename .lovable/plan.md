# Rewrite to React Router DOM SPA

Convert the project from TanStack Start (SSR framework) to a plain Vite + React + react-router-dom SPA. Lose SSR, server functions, per-route SEO. Gain familiarity and a dead-simple Vercel deploy.

## What gets deleted

- `src/start.ts`, `src/server.ts`, `src/router.tsx`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`
- `src/routes/sitemap[.]xml.ts` (server route — replaced with a static `public/sitemap.xml`)
- `src/integrations/supabase/auth-middleware.ts`, `auth-attacher.ts` (server-fn only)
- `vite.config.vercel.ts`, `wrangler.jsonc`, `worker-configuration.d.ts`
- Cloudflare/TanStack-specific packages: `@cloudflare/vite-plugin`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@lovable.dev/vite-tanstack-config`

## What gets created

- `index.html` at repo root (SPA shell)
- `src/main.tsx` (React mount + BrowserRouter)
- `src/App.tsx` (`<Routes>` table)
- `src/pages/` folder with: `Index.tsx`, `Admin.tsx`, `Blog.tsx`, `Contact.tsx`, `Login.tsx`, `Signup.tsx`, `Projects.tsx`, `NotFound.tsx`
- New plain Vite `vite.config.ts` (React plugin + Tailwind + tsconfig-paths only)
- `public/sitemap.xml` (static, hand-written for the known routes)

## What gets rewritten

- `src/routes/admin.tsx` — the `createServerFn` mutations become direct `supabase.from(...).insert/update/delete()` calls from the client. RLS already requires `admin` role, so security is preserved.
- `src/components/layout/Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `BlogPreview.tsx` — swap `import { Link } from "@tanstack/react-router"` → `import { Link } from "react-router-dom"`, and `to="/foo"` stays the same (no `params={{}}` syntax used).
- Any `useNavigate` / `useRouter` / `useParams` calls → react-router-dom equivalents.
- All route `head()` SEO metadata → moved into either a single static `<title>`/`<meta>` in `index.html`, or per-page using a tiny `useDocumentTitle` hook (no react-helmet dependency).

## Vercel deploy

After the rewrite, `vercel.json` becomes:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Build command: `vite build`. Output: `dist/`. Framework preset in Vercel: **Vite**. That's it.

## What you lose (explicit)

- **SSR** — initial HTML is empty, content renders client-side. Slower first paint, weaker SEO without extra work.
- **Per-route SEO metadata** — Google still indexes SPAs but social previews (OG tags) won't vary per route without SSR or pre-rendering.
- **Server functions** — anything that needed a secret has to move to a Supabase Edge Function or a separate backend.
- **`/api/*` server routes** — none currently in heavy use besides sitemap, which becomes static.
- **The Lovable preview's TanStack-aware features** — the preview will still work as a plain SPA, but route-aware tooling tied to TanStack is gone.

## Execution order

1. Install `react-router-dom`, remove TanStack packages.
2. Write new `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`.
3. Create `src/pages/*` by converting each `src/routes/*` file (strip `createFileRoute`, strip `head()`, keep the component).
4. Rewrite `Admin.tsx` server-fn calls → direct Supabase calls.
5. Update the 4 components that import from `@tanstack/react-router`.
6. Delete obsolete files.
7. Update `vercel.json` + `package.json` scripts.
8. Write `public/sitemap.xml`.

Total: ~25–30 file changes. This will take one large turn.
