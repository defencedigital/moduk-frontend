import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: [`${__dirname}/src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    setupFiles: `${__dirname}/vitest/setup.ts`,
  },
})
