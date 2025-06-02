import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permet l'accès via IP locale (ex: 192.168.x.x)
    port: 5173   // Port par défaut, modifiable si nécessaire
  }
})
