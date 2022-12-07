import { expect, test } from '../../../fixtures'

test.describe('input, with prefix and suffix', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input/with-prefix-and-suffix')
  })

  test('displays prefix and suffix', async ({ page }) => {
    await expect(
      page.getByText('£'),
    ).toBeVisible()

    await expect(
      page.getByText('per item', { exact: true }),
    ).toBeVisible()
  })
})
