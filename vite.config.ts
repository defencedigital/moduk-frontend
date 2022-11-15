import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/client/index.ts',
      name: 'MODUK',
      fileName: 'MODUK',
    },
    outDir: './dist/client',
  },
})
