// Vercel-only Vite config for TanStack Start.
// Activate on Vercel either by:
//   1. Renaming this file to `vite.config.ts` in the GitHub repo, OR
//   2. Setting Vercel's "Build Command" to: vite build --config vite.config.vercel.ts
//
// IMPORTANT: do NOT override `server.entry` here — TanStack Start's `target: "vercel"`
// auto-generates the correct Vercel serverless handler (api/server.js + .vercel/output).
// Our src/server.ts is a Cloudflare Worker wrapper and will 404 on Vercel.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "vercel",
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
});
