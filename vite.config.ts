import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Le frontend est dans /client
  root: path.resolve(__dirname, "client"),

  // ✅ DOSSIER PUBLIC CORRECT
  publicDir: "public",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },

  build: {
    // Sortie compatible Vercel
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },

  server: {
    host: true,
    port: 3000
  }
});

