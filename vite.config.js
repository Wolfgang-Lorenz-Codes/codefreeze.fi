import { resolve } from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		preact(),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, 'scripts/status.tsx'), resolve(__dirname, 'scripts/participants.tsx')],
      name: 'dynamic',
      fileName: 'dynamic',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})