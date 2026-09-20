import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: '/',
  // inspectAttr is a dev-only inspector; keep it out of production builds so it
  // doesn't inject code-path="..." attributes into the prerendered/indexed HTML.
  plugins: [...(command === 'serve' ? [inspectAttr()] : []), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // React + the router/helmet shell are needed by every route, so they
        // go in one long-lived vendor chunk that survives app-code deploys.
        // GSAP is named explicitly so the lazily-imported animation chunk is
        // easy to spot in the build output.
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return;
          if (/[\\/]node_modules[\\/]gsap[\\/]/.test(id)) return 'gsap';
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|react-helmet-async)[\\/]/.test(id)) {
            return 'react-vendor';
          }
        },
      },
    },
  },
}));
