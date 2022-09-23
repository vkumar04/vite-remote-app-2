import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: 'remoteEntry.js',
      exposes: {
          './Charts': './src/pages/ChartsPage.tsx',
      },
      shared: ['react', 'react-dom'],
  })
  ]
})
