import { expect, test } from '../../../fixtures'

test.describe('warning text, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/warning-text/default')
  })

  test('displays visually hidden icon text', async ({ page }) => {
    await expect(
      page.locator('.govuk-warning-text__assistive'),
    ).toHaveText('Warning')
  })

  test('displays the warning text', async ({ page }) => {
    await expect(
      page.getByText(
        'You must appeal within 1 year of getting your decision letter.',
      ),
    ).toBeVisible()
  })
})
