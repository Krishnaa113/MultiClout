import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-plugin-pwa',
      injectRegister: null,
      strategies: 'generateSW'
    }
  ],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  define: {
    __VITE_API_URL__: JSON.stringify('http://localhost:5000/api')
  }
})
