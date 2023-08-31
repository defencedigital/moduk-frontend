import { expect, test } from '../../../fixtures'

test.describe('notification banner, with disable auto focus', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/notification-banner/with-disable-auto-focus')
  })

  test('does not focus the component', async ({ page }) => {
    await expect(page.getByRole('region')).not.toBeFocused()
  })
})
