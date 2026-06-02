# Deploying to Vercel

A `vercel.json` is committed at the repo root, so Vercel auto-configures itself when you import the repo. No manual build settings needed.

## Steps

1. **Export to GitHub** from Lovable (top-right → GitHub).
2. **Import the repo in Vercel** → New Project → pick this repo.
3. **Leave all build settings on default** — `vercel.json` tells Vercel to run `vite build --config vite.config.vercel.ts` and to look for `.vercel/output` (TanStack Start writes there automatically).
4. Add **Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `LOVABLE_API_KEY` (server-side, for AI features)
5. **Deploy.**

## Why you got `404: NOT_FOUND`

That error from Vercel's edge means it served the site with no serverless handler attached. Usual causes:
- Framework preset was set to **Vite** → static-only deploy → 404 on every route.
- Build command used the default `vite.config.ts` → Cloudflare Worker output, which Vercel can't run.
- Output directory was forced to `dist/` → skipped `.vercel/output`.

`vercel.json` overrides all three. If you previously set Framework / Build Command / Output Directory manually in the Vercel dashboard, **clear those overrides** (Settings → Build & Development Settings → click "Override" off for each) so `vercel.json` takes effect, then redeploy.

## Local check

You can run the Vercel build locally to confirm it produces `.vercel/output/`:

```bash
npm run build:vercel
ls .vercel/output
```

If you see `config.json`, `functions/`, and `static/` inside `.vercel/output/`, the build is correct.

## Optional cleanup

Once deployed and working, you can remove Cloudflare-only bits from the GitHub repo (don't remove them in Lovable — the preview needs them):
- `wrangler.jsonc`
- devDependencies: `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`

If you remove them, rename `vite.config.vercel.ts` → `vite.config.ts` and simplify `vercel.json` (drop the custom `buildCommand`).
