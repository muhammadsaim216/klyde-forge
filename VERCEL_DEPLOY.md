# Deploying to Vercel

This project runs on TanStack Start. The default `vite.config.ts` targets
Cloudflare (so the Lovable preview works). For Vercel, use `vite.config.vercel.ts`.

## One-time setup on Vercel

1. **Export to GitHub** from Lovable (top-right → GitHub).
2. **Import the repo in Vercel** → New Project → pick this repo.
3. In **Project Settings → Build & Development Settings**:
   - **Framework Preset:** `Other` (do NOT pick Vite — it will deploy as a static site and you'll get 404s).
   - **Build Command:** `vite build --config vite.config.vercel.ts`
   - **Output Directory:** leave EMPTY (TanStack Start writes to `.vercel/output` automatically — Vercel auto-detects it).
   - **Install Command:** leave default (`npm install` / `bun install`).
4. Add **Environment Variables** (Settings → Environment Variables):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `LOVABLE_API_KEY` (server-side, for AI features)
5. **Deploy.**

## Why you got `404: NOT_FOUND`

That error means Vercel served your site as static files with no serverless
handler attached. It happens when:
- The framework preset was set to **Vite** (static-only), OR
- The build command used the default `vite.config.ts` (Cloudflare target — produces a Worker, not Vercel functions), OR
- The output directory was forced to `dist/` (skips the `.vercel/output` directory that TanStack Start generates).

The fixes above (Framework = Other, Build Command pointing at `vite.config.vercel.ts`, empty Output Directory) address all three.

## Optional cleanup

Once deployed and working, you can remove Cloudflare-only files from the **GitHub repo** (not from Lovable — they're needed for the preview):
- `wrangler.jsonc`
- devDependencies: `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`

If you remove them, also rename `vite.config.vercel.ts` → `vite.config.ts` (overwriting the original) and drop the custom Build Command.
