import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // correct for root deployment on username.github.io
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined, // optional, keeps chunks simple
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
