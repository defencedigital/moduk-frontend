import { expect, test } from '../../../fixtures'

test.describe('tag, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/tag/default')
  })

  test('displays the text "completed"', async ({ page }) => {
    await expect(page.locator('text=completed')).toBeVisible()
  })
})
