import { expect, test } from '../../../fixtures'

test.describe('inset text, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/inset-text/default')
  })

  test('displays the inset text', async ({ page }) => {
    await expect(
      page.getByText(
        'You’ll get confirmation that we have received your report within 5 working days.',
      ),
    ).toBeVisible()
  })
})
