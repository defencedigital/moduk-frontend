import { expect, test } from '@playwright/test'

test.describe('phase banner, beta', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/phase-banner/beta')
  })

  test('displays the phase banner', async ({ page }) => {
    await expect(
      page.getByRole('paragraph'),
    ).toContainText('BETA', { useInnerText: true })
  })
})
