import { expect, test } from '@playwright/test'

test.describe('cookie banner, accepted', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/cookie-banner/accepted')
  })

  test('displays the cookie banner', async ({ page }) => {
    await expect(
      page.getByRole('heading', {
        level: 2,
      }),
    ).toBeHidden()
    await expect(page.getByRole('button')).toHaveText('Hide cookie message')
    await expect(page.getByRole('paragraph')).toHaveText(
      'You’ve accepted analytics cookies. You can change your cookie settings at any time.',
    )
    await expect(page.getByRole('link')).toHaveText(
      'change your cookie settings',
    )
  })
})
