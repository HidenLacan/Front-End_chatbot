import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default directory, no need to change if this is fine
  },
  css: {
    postcss: './postcss.config.js',
  },
});
