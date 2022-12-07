import { expect, test } from '../../../fixtures'

test.describe('error message, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/error-message/default')
  })

  test('displays the error message text', async ({ componentElement }) => {
    await expect(componentElement).toHaveText('Error: Enter a first name')
  })
})
