import { expect, test } from '@playwright/test'

test.describe('button, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/button/default')
  })

  test('displays the button', async ({ page }) => {
    await expect(page.getByRole('button')).toHaveText([
      'Save and continue',
    ])
  })
})
