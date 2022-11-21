import { expect, test } from '../../../fixtures'

test.describe('footer, with secondary navigation and links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/footer/with-secondary-navigation-and-links')
  })

  test('has 17 links in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(9 + 3 + 3)
  })
})
