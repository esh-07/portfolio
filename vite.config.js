import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Must match repo name for GitHub Pages project site (CS571-S26.github.io/p60/)
  base: '/p60/',
})
