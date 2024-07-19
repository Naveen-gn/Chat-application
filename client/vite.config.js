import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': 'https://chat-app-server-chi-three.vercel.app',
      secure: false,
    },
  },
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: false,// Specify the output directory
  }
})
