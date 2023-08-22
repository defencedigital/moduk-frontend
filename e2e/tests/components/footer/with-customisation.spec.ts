import { expect, test } from '../../../fixtures'

test.describe('footer, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/footer/with-customisation')
  })

  test('display the "Visually hidden title" heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Visually hidden title' })).toBeVisible()
  })
})
