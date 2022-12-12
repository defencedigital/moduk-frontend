import { expect, test } from '../../../fixtures'

test.describe('error summary, with error linked to date part', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/error-summary/with-error-linked-to-date-part')
  })

  test('displays the error summary heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2 })).toHaveText('There is a problem')
  })

  test('clicking the link focuses on the input', async ({ page }) => {
    await page.getByRole('link', { name: 'The start date of the contract must include a year' }).click()

    await expect(page.getByLabel('Year')).toBeFocused()
  })
})
