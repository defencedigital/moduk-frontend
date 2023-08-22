import { expect, test } from '../../../fixtures'

test.describe('input, with hint', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input/with-hint')
  })

  test('displays the hint text', async ({ page }) => {
    await expect(
      page.getByText('The name you’ll use on promotional material'),
    ).toBeVisible()
  })

  test('has an accessible hint', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveDescription('The name you’ll use on promotional material')
  })
})
