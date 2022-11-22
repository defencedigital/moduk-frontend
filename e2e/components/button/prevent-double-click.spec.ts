import { expect, test } from '@playwright/test'

test.describe('button, prevent double click', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/button/prevent-double-click')
  })

  test('displays the button', async ({ page }) => {
    page.getByRole('button').click({ clickCount: 4 })
    await expect(page.getByTestId('submitCountDisplay')).toHaveText([
      'Form submit count 1',
    ])
    await expect(page.getByTestId('buttonCountDisplay')).toHaveText([
      'Button click count 4',
    ])
  })
})
