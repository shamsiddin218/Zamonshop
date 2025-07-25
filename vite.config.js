import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ← MUHIM: path modulini import qilish kerak!

export default defineConfig({
  plugins: [react()],
  resolve: { // ← alias faqat resolve ichida bo'lishi kerak
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
