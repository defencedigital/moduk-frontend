import { expect, test } from '../../../fixtures'

test.describe('accordion, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/accordion/with-h3-headings')
  })

  test('uses the h3 tag for headings', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 3 })).toHaveCount(4)
  })
})
