import { expect, test } from '../../../fixtures'

test.describe('select, with hint', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/select/with-hint')
  })

  test('displays the hint text', async ({ componentElement }) => {
    await expect(componentElement).toContainText('This can be different to where you went before')
  })
})
