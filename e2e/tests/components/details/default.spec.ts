import { expect, test } from '../../../fixtures'

test.describe('detail, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/details/default')
  })

  test('displays only the heading', async ({ page }) => {
    await expect(
      page.locator('summary'),
    ).toHaveText('Help with organisation')
    await expect(
      page.getByText(
        'We need to know the organisation you work for so we can forward your request to the correct team.',
        { exact: true },
      ),
    ).not.toBeVisible()
  })

  test('display the content, when clicked', async ({ page }) => {
    page.locator('summary').click()
    await expect(
      page.getByText(
        'We need to know the organisation you work for so we can forward your request to the correct team.',
        { exact: true },
      ),
    ).toBeVisible()
  })
})
