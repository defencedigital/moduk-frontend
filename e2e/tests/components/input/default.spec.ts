import { expect, test } from '../../../fixtures'

test.describe('input, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is the name of the event?')
  })

  test('displays the input', async ({ page }) => {
    await expect(page.getByRole('textbox')).toBeVisible()
  })
})
