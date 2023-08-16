import { expect, test } from '../../../fixtures'

test.describe('input, with error', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/input/with-error')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is the name of the event?')
  })

  test('has an accessible error message', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveDescription('Error: Enter an event name')
  })

  test('has an accessible hint', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveDescription('The name you’ll use on promotional material')
  })
})
