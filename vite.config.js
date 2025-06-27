// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
  resolve: { // <--- ADICIONE ESTA SEÇÃO
    dedupe: [
      '@codemirror/state',
      '@codemirror/view',
      '@codemirror/language', // Pode ser útil dedup de language também
      // Se o erro persistir, adicione aqui qualquer pacote @codemirror que aparecer no stack trace
    ],
  },
});