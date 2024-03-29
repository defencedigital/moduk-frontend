import { expect, test } from '../../../fixtures'

test.describe('checkboxes, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/checkboxes/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(page.getByRole('heading')).toHaveText('Who did you report the incident to?')
  })

  test('displays the hint text', async ({ componentElement }) => {
    await expect(componentElement).toContainText('Select all that apply.')
  })

  test('displays five checkboxes', async ({ page }) => {
    await expect(page.getByRole('checkbox')).toHaveCount(5)
  })
})
