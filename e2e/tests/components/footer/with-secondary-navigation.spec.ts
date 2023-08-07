import { expect, test } from '../../../fixtures'

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

  test('does not display the "Support links" heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Support links' })).not.toBeVisible()
  })
})
