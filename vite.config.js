import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          formik: ['formik', 'yup'],
          mui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },
});
