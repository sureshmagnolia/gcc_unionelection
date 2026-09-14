import { defineConfig } from 'vite'

export default defineConfig({
  // Base path relative so assets resolve correctly on GitHub Pages or locally
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true, // Clean the docs folder before building
  }
})
