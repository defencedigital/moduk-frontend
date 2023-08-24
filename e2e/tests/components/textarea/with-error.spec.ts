import { expect, test } from '../../../fixtures'

test.describe('textarea, with error', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/textarea/with-error')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is the event about?')
  })

  test('has an accessible error message', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveDescription('Error: Enter some details about the event')
  })

  test('has an accessible hint', async ({ page }) => {
    await expect(page.getByRole('textbox')).toHaveDescription(
      'This will be shown on the public page for the event, below the event title',
    )
  })
})
