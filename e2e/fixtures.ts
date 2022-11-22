import { Locator, test as base } from '@playwright/test'

interface Fixtures {
  componentElement: Locator
}

export * from '@playwright/test'

export const test = base.extend<Fixtures>({
  componentElement: async ({ page }, use) => {
    await use(page.locator('#root > *:first-child'))
  },
})
