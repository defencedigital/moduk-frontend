import { expect, test } from '../../../fixtures'

test.describe('fieldset, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/fieldset/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is your address?')
  })

  test('displays the fieldset fields', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveCount(4)
  })
})
