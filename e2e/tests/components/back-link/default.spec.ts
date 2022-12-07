import { expect, test } from '../../../fixtures'

test.describe('back link, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/back-link/default')
  })

  test('displays the link with the expected text', async ({ page }) => {
    await expect(page.getByRole('link')).toHaveText('Back')
  })
})
