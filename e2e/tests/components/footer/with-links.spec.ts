import { expect, test } from '../../../fixtures'

test.describe('footer, with links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/footer/with-links')
  })

  test('has five links in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(3 + 2)
  })
})
