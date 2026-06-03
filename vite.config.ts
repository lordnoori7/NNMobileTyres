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
}));
