import { expect, test } from '../../../fixtures'

test.describe('header, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/header/default')
  })

  test('has one link in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(1)
  })
})
