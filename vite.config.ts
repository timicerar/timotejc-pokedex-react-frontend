import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(import.meta.dirname)],
      },
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
