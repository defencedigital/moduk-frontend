import { expect, test } from '@playwright/test'

test.describe('phase banner, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/phase-banner/default')
  })

  test('displays the phase banner', async ({ page }) => {
    await expect(
      page.getByRole('paragraph'),
    ).toContainText('ALPHA', { useInnerText: true })
  })
})
