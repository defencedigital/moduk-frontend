import { expect, test } from '../../../fixtures'

test.describe('radios, with conditional reveal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/radios/with-conditional-reveal')
  })

  test('displays the email address input', async ({ page }) => {
    await expect(page.getByLabel('Email address')).toBeVisible()
  })

  test('hides the phone inputs', async ({ page }) => {
    await expect(page.getByLabel('Phone number', { exact: true })).not.toBeVisible()
    await expect(page.getByLabel('Mobile phone number')).not.toBeVisible()
  })

  test('hides the email address input when another option is selected', async ({ page }) => {
    await page.getByLabel('Phone', { exact: true }).click()
    await expect(page.getByLabel('Email address')).not.toBeVisible()
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('shows the phone inputs', async ({ page }) => {
      await expect(page.getByLabel('Phone number', { exact: true })).toBeVisible()
      await expect(page.getByLabel('Mobile phone number')).toBeVisible()
    })
  })
})
