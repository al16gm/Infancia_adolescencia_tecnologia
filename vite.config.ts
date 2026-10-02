import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command, mode }) => {
  // En producción (npm run build) se utiliza el subdirectorio del repositorio en GitHub Pages.
  // En desarrollo local (npm run dev) se sirve en la raíz '/' para preservar portabilidad.
  const isProduction = command === 'build' || mode === 'production';

  return {
    base: isProduction
      ? process.env.VITE_BASE_PATH || '/Infancia_adolescencia_tecnologia/'
      : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
