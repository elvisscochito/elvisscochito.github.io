import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
      /* '/api': {
        target: 'http://localhost:3000', // use HTTP, not HTTPS
        changeOrigin: true, // to avoid CORS issues
        secure: false, // allow HTTP connections without TLS (necessary for local development).
      }, */
    }
  }
})
