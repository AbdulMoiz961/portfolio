import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site → served from /portfolio/
const REPO_NAME = "portfolio";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${REPO_NAME}/` : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
