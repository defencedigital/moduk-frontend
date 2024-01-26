import { expect, test } from '../../../fixtures'

test.describe('pagination, with next and previous only', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/pagination/with-next-and-previous-only')
  })

  test('displays the expected links', async ({ page }) => {
    await expect(page.getByRole('link')).toHaveCount(2)
    await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
    await expect(page.getByRole('link', { name: '1 of 3' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
    await expect(page.getByRole('link', { name: '3 of 3' })).toBeVisible()
  })
})
