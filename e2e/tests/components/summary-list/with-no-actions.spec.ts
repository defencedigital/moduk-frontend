import { expect, test } from '../../../fixtures'

test.describe('summary list, with no actions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/summary-list/with-no-actions')
  })

  test('displays the titles', async ({ page }) => {
    await expect(
      page.getByRole('term'),
    ).toHaveText(['Name', 'Date of birth', 'Address', 'Contact details'])
  })

  test('displays the values', async ({ page }) => {
    await expect(
      page.locator('role=definition'),
    ).toHaveCount(4)
  })
})
