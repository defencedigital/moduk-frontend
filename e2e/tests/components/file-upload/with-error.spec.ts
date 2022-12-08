import { expect, test } from '../../../fixtures'

test.describe('file upload, with error', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/file-upload/with-error')
  })

  test('displays the error message', async ({ page }) => {
    await expect(page.getByLabel('Upload a file')).toHaveDescription(
      'The CSV must be smaller than 2MB',
    )
  })
})
