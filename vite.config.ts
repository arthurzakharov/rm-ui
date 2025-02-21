/// <reference types="vite/client" />
/// <reference types="vitest" />
import { fileURLToPath } from 'node:url';
import path, { resolve } from 'node:path';
import { globSync } from 'glob';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ exclude: ['**/*.stories.tsx', 'src/test', '**/*.test.tsx', '**/*.test.ts'] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/main.ts']).map((file) => {
          const entryName = path.relative('src', file.slice(0, file.length - path.extname(file).length));
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        }),
      ),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'lucide-react': 'LucideReact',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      include: ['src/components', 'src/hooks', 'src/utils'],
      exclude: ['**/*.stories.tsx'],
    },
  },
});
