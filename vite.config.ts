import { defineConfig } from 'vite';

export default defineConfig({
  base: '/GravityFalls_poll/',
  server: {
    open: '/GravityFalls_poll/', 
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        question: './question.html',
        results: './results.html',
      },
    },
  },
})