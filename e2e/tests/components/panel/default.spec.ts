import { expect, test } from '../../../fixtures'

test.describe('panel, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/panel/default')
  })

  test('displays the panel', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1 }),
    ).toHaveText('Application complete')
  })
})
