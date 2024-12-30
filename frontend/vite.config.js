import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/server" : {
        target: "https://doctor-appointment-system-tau-tan.vercel.app",
        rewrite: (path) => path.replace(/^\/server/, ""),
        secure: true,
      }
    }
  }
  
})
