import { expect, test } from '../../../fixtures'

test.describe('checkboxes, with none option', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/checkboxes/with-none-option')
  })

  test('deselects other options when the none option is selected', async ({ page }) => {
    const reactCheckbox = page.getByLabel('React')
    const noneCheckbox = page.getByLabel('I do not use any of these technologies')

    await reactCheckbox.click()
    await noneCheckbox.click()

    await expect(reactCheckbox).not.toBeChecked()
    await expect(noneCheckbox).toBeChecked()
  })
})
