// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,      // 5173 per marvincla, 5174 per nitra
    strictPort: true // se occupata, fallisce (non cambia porta da solo)
  }
})