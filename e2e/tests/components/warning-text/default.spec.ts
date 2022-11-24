import { expect, test } from '../../../fixtures'

test.describe('warning text, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/warning-text/default')
  })

  test('displays the warning text', async ({ page }) => {
    await expect(
      page.getByText(
        'This operation cannot be undone when complete.',
      ),
    ).toBeVisible()
  })
})
