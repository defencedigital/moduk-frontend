import { expect, test } from '../../../fixtures'

test.describe('pagination, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination/default')
  })

  test('displays the expected links', async ({ page }) => {
    await expect(page.getByRole('link')).toHaveCount(5)
    await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
    await expect(page.getByRole('link', { name: /^Page \d+$/ })).toHaveCount(3)
  })

  test('sets page two as active', async ({ page }) => {
    await expect(page.getByText('2')).toHaveAttribute('aria-current', 'page')
  })
})
