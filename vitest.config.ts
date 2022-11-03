import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: `${__dirname}/vitest/setup.ts`,
  },
})
