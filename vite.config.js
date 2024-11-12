import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: 5173, // You can keep the default port or change it if needed
  },
  plugins: [react()],
})
