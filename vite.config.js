import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // base: './' keeps asset paths relative so the built index.html
  // opens correctly both from a local file system AND a web server.
  base: './',
})
