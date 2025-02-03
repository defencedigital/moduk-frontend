import { type Locator, test as base } from '@playwright/test'

interface Fixtures {
  componentElement: Locator
  getCharacterCountMessage: (text: string) => Locator
  getScreenReaderMessage: () => Locator
  content: Locator
  skipLink: Locator
}

export * from '@playwright/test'

export const test = base.extend<Fixtures>({
  componentElement: async ({ page }, use) => {
    await use(page.locator('#root > *:first-child'))
  },
})
