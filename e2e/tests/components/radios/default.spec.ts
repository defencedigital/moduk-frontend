import { expect, test } from '../../../fixtures'

test.describe('radios, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/radios/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(page.getByRole('heading')).toHaveText('Which organisation do you work for?')
  })

  test('displays four radios', async ({ page }) => {
    await expect(page.getByRole('radio')).toHaveCount(4)
  })
})
