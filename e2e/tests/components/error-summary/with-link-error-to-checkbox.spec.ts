import { expect, test } from '../../../fixtures'

test.describe('error summary, with error linked to checkbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/error-summary/with-error-linked-to-checkbox')
  })

  test('displays the error summary heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2 })).toHaveText('There is a problem')
  })

  test('displays the error summary list', async ({ page }) => {
    await expect(page.getByRole('link')).toHaveText('Select which technologies you use in your role')
  })

  test('clicking the link focuses on the input', async ({ page }) => {
    await page.getByRole('link', { name: 'Select which technologies you use in your role' }).click()
    await expect(page.getByRole('checkbox').first()).toBeFocused()
  })
})
