import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
  server: {
    proxy: {
      '/dish': {
        target: 'https://para-dish-back.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dish/, ''),
      },
    },
  }
});
