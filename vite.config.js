import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' garante caminhos relativos, compatível com GitHub Pages e Vercel
export default defineConfig({
  base: './',
  plugins: [vue()],
})
