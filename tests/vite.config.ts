import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: __dirname, // Define a pasta "tests" como raiz
  plugins: [react()],
  resolve: {
    alias: {
      '@mfe-host': path.resolve(__dirname, '../mfe.host/src'),
      '@mfe-assistant': path.resolve(__dirname, '../mfe.assistant/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.ts', // Setup global para Jest-DOM
  },
});
