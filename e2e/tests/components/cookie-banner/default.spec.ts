import { expect, test } from '../../../fixtures'

test.describe(' cookie banner, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/cookie-banner/default')
  })

  test('displays the cookie banner', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
      }),
    ).toHaveText('Cookies on [name of service]')
    await expect(page.getByRole('button')).toHaveText([
      'Accept analytics cookies',
      'Reject analytics cookies',
    ])

    await expect(page.getByRole('link')).toHaveText('View cookies')
  })
})
