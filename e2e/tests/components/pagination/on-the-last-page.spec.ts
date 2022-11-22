import { expect, test } from '../../../fixtures'

test.describe('pagination, on the last page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination/on-the-last-page')
  })

  test.describe('@desktop', () => {
    test('displays the expected links', async ({ page }) => {
      await expect(page.getByRole('link')).toHaveCount(4)
      await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
      await expect(page.getByRole('link', { name: /^Page \d+$/ })).toHaveCount(3)
    })
  })

  test.describe('@mobile', () => {
    test('displays the expected links', async ({ page }) => {
      await expect(page.getByRole('link')).toHaveCount(3)
      await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
      await expect(page.getByRole('link', { name: /^Page [13]$/ })).toHaveCount(2)
    })
  })

  test('sets page three as active', async ({ page }) => {
    await expect(page.getByText('3')).toHaveAttribute('aria-current', 'page')
  })
})
