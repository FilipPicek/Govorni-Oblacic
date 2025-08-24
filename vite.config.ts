import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Govorni-Oblacic/'
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
