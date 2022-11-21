import { expect, test } from '@playwright/test'

test.describe('footer, with secondary navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/footer/with-secondary-navigation')
  })

  test('has 11 links in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(9 + 2)
  })
})
