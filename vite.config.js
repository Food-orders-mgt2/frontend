import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createProxy } from 'vite-plugin-mock';

export default defineConfig({
  plugins: [
    react(),
    createProxy({
      '/api': {
        target: 'https://para-dish-back.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
});
