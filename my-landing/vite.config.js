import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        portfolio: path.resolve(__dirname, 'portfolio.html'),
      },
    },
  },
  plugins: [react()],
})
