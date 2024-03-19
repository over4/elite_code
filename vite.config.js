import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Adjust this path to match your Django static files directory
    emptyOutDir: true, // This clears the directory before building
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Proxy API requests to Django
    }
  },
})
