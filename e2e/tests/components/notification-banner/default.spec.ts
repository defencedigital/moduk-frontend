import { expect, test } from '../../../fixtures'

test.describe('notification banner, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/notification-banner/default')
  })

  test('does not focus the component', async ({ page }) => {
    await expect(page.getByRole('region')).not.toBeFocused()
  })

  test('displays the notification heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('Important')
  })

  test('displays the notification content', async ({ page }) => {
    await expect(
      page.getByRole('paragraph'),
    ).toHaveText('There may be a delay in processing your application because of the coronavirus outbreak.')
  })
})
