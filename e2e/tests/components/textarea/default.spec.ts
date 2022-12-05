import { expect, test } from '../../../fixtures'

test.describe('textarea, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/textarea/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is the event about?')
  })

  test('displays the hint text', async ({ page }) => {
    await expect(
      page.getByText('This will be shown on the public page for the event, below the event title'),
    ).toBeVisible()
  })

  test('displays the input', async ({ page }) => {
    await expect(page.getByRole('textbox')).toBeVisible()
  })
})
