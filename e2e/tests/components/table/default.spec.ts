import { expect, test } from '../../../fixtures'

test.describe('table, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/table/default')
  })

  test('displays the caption', async ({ page }) => {
    await expect(
      page.getByRole('caption'),
    ).toHaveText('Active users of each application')
  })

  test('displays two column headers', async ({ page }) => {
    await expect(page.getByRole('columnheader')).toHaveCount(2)
  })

  test('displays three column headers', async ({ page }) => {
    await expect(page.getByRole('rowheader')).toHaveCount(3)
  })

  test('displays four rows', async ({ page }) => {
    await expect(page.getByRole('row')).toHaveCount(4)
  })
})
