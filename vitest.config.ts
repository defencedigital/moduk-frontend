import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: [`${__dirname}/src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    setupFiles: [
      `${__dirname}/vitest/disableReactDevToolsMessage.ts`,
      `${__dirname}/vitest/setup.ts`,
    ],
    clearMocks: true,
  },
  resolve: {
    alias: {
      '@moduk/frontend/react': path.resolve(__dirname, './src/react'),
      '@moduk/frontend/client': path.resolve(__dirname, './src/client'),
    },
  },
})
