import { expect, test } from '../../../fixtures'

test.describe('notification banner, success', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/notification-banner/success')
  })

  test('focuses the component', async ({ page }) => {
    await expect(page.getByRole('alert')).toBeFocused()
  })

  test('displays the notification heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 2 }),
    ).toHaveText('Success')
  })

  test('displays the notification sub-heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 3 }),
    ).toHaveText(' Training outcome recorded and trainee withdrawn')
  })

  test('displays the notification content', async ({ page }) => {
    await expect(page.getByRole('paragraph')).toHaveText(
      'Contact example@department.gov.uk if you think there’s a problem.',
    )
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('does not focus the component', async ({ page }) => {
      await expect(
        page.getByRole('alert'),
      ).not.toBeFocused()
    })
  })
})
