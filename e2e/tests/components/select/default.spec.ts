import { expect, test } from '../../../fixtures'

test.describe('select, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/select/default')
  })

  test('initial value is selected', async ({ page }) => {
    await expect(page.getByLabel('Sort by')).toHaveValue('updated')
  })

  test('contains four options', async ({ page }) => {
    await expect(page.getByRole('option')).toHaveCount(4)
  })

  test('selecting a new option updates the value', async ({ page }) => {
    await page.getByLabel('Sort by').selectOption('comments')
    await expect(page.getByLabel('Sort by')).toHaveValue('comments')
  })
})
