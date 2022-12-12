import { expect, test } from '../../../fixtures'

test.describe('summary list, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/summary-list/default')
  })

  test('displays the titles', async ({ page }) => {
    await expect(
      page.getByRole('term'),
    ).toHaveText(['Name', 'Date of birth', 'Address', 'Contact details'])
  })

  test('displays the values and actions', async ({ page }) => {
    await expect(
      page.locator('role=definition'),
    ).toHaveCount(8)
  })
})
