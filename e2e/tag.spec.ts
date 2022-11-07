import { expect, test } from '@playwright/test'

test.describe('Tag, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/tag/default')
  })

  test('displays the text "completed"', async ({ page }) => {
    await expect(page.locator('text=completed')).toBeVisible()
  })

  test('passes accessibility checks', async ({ page }) => {
    await expect(page).toHaveNoViolations()
  })

  test('matches the snapshot @visual-regression', async ({ page }) => {
    await expect(page).toHaveScreenshot()
  })
})
