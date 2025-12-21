import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your GitHub repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
