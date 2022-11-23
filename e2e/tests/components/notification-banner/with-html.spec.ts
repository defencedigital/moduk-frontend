import { expect, test } from '../../../fixtures'

test.describe('notification banner, with html', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/notification-banner/with-html')
  })

  test('does not focus the component', async ({ page }) => {
    await expect(page.getByRole('region')).not.toBeFocused()
  })

  test('displays the notification heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 2 }),
    ).toHaveText('Important')
  })

  test('displays the notification content', async ({ page }) => {
    await expect(
      page.getByRole('paragraph'),
    ).toHaveText('You have 7 days left to send your application. View application.')
  })
})
