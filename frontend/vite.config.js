import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/server": {
        target: "https://sehatx.com",
        rewrite: (path) => path.replace(/^\/server/, ""),
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
