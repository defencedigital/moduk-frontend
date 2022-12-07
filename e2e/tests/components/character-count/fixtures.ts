import { expect, test as base } from '../../../fixtures'

const test = base.extend({
  getCharacterCountMessage: ({ page }, use) => {
    // This needs to be more specific than just getByText(), as there is a second identical
    // message just for screen readers
    use((text: string) => page.locator('.govuk-character-count__message', { hasText: text }))
  },
})

export { expect, test }
