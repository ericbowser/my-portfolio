import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost',
    https: {}
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
      ]
      }
  }
})
