import { expect, test } from '../../../fixtures'

test.describe('date input, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/date-input/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('When will the contract start?')
  })

  test('displays the hint text', async ({ page }) => {
    await expect(
      page.getByText('For example, 27 3 2023'),
    ).toBeVisible()
  })

  test('displays the inputs', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveCount(3)
  })
})
