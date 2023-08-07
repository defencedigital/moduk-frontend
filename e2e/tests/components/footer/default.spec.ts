import { expect, test } from '../../../fixtures'

test.describe('footer, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/footer/default')
  })

  test('displays the licence text', async ({ page }) => {
    await expect(
      page.getByText(
        'All content is available under the Open Government Licence v3.0, except where otherwise stated',
      ),
    ).toBeVisible()
  })

  test('displays the copyright text', async ({ page }) => {
    await expect(
      page.getByText('© Crown copyright'),
    ).toBeVisible()
  })

  test('does not display the "Support links" heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Support links' })).not.toBeVisible()
  })
})
