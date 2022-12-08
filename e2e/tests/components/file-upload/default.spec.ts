import { expect, test } from '../../../fixtures'

test.describe('file upload, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/file-upload/default')
  })

  test('displays the file upload', async ({ page }) => {
    await expect(
      page.getByLabel('Upload a file'),
    ).toBeVisible()
  })
})
