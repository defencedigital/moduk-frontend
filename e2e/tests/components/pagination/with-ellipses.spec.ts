import { expect, test } from '../../../fixtures'

test.describe('pagination, with ellipses', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination/with-ellipses')
  })

  test.describe('@tablet-and-desktop', () => {
    test('displays the expected links', async ({ page }) => {
      await expect(page.getByRole('link')).toHaveCount(7)
      await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
      await expect(page.getByRole('link', { name: /^Page \d+$/ })).toHaveCount(5)
    })
  })

  test.describe('@mobile', () => {
    test('displays the expected links', async ({ page }) => {
      await expect(page.getByRole('link')).toHaveCount(5)
      await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
      await expect(page.getByRole('link', { name: /^Page (1|7|42)$/ })).toHaveCount(3)
    })
  })

  test('sets page seven as active', async ({ page }) => {
    await expect(page.getByText('7')).toHaveAttribute('aria-current', 'page')
  })
})
