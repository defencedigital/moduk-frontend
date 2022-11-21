import { expect, test } from '../../../fixtures'

test.describe('header, with service name and no service url', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/header/with-service-name-and-no-service-url')
  })

  test('has one link in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(1)
  })
})
