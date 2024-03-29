import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
      secure: false,
    },
  },
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: false,// Specify the output directory
  }
})
