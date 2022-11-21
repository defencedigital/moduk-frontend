import { expect, test } from '../../../fixtures'

test.describe('breadcrumbs, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/breadcrumbs/default')
  })

  test('displays the breadcrumbs', async ({ page }) => {
    const items = ['Home', 'Components', 'Breadcrumbs']
    await expect(page.getByRole('link')).toHaveText(items)
  })
})
