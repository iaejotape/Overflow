// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // <-- define que o index.html está dentro de src
  plugins: [react()],
  build: {
    outDir: '../dist', // <-- coloca o dist fora de src
    emptyOutDir: true, // <-- garante que limpa a pasta dist a cada build
  },
  optimizeDeps: {
    include: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/lang-cpp',
      '@codemirror/lang-java',
      '@codemirror/lang-python',
      '@codemirror/highlight',
      '@uiw/react-codemirror',
    ],
  },
  resolve: {
    dedupe: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language',
    ],
  },
});
