import { expect, test } from '../../../fixtures'

test.describe('checkboxes, with none option', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/checkboxes/with-none-option')
  })

  test('deselects other options when the none option is selected', async ({ page }) => {
    const unitMedicCheckbox = page.getByLabel('Unit medic')
    const noneCheckbox = page.getByLabel('I did not report the incident')

    await unitMedicCheckbox.click()
    await noneCheckbox.click()

    await expect(unitMedicCheckbox).not.toBeChecked()
    await expect(noneCheckbox).toBeChecked()
  })
})
