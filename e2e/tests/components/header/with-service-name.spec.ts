import { expect, test } from '../../../fixtures'

test.describe('header, with service name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/header/with-service-name')
  })

  test('has two links in total', async ({ page }) => {
    await expect(
      page.getByRole(
        'link',
      ),
    ).toHaveCount(2)
  })

  test.describe('@visual-regression', () => {
    test('matches the saved screenshot when the service name is hovered', async ({ page, componentElement }) => {
      await page.getByText('Service name').hover()

      await expect(componentElement).toHaveScreenshot('service-name-hover.png')
    })
  })
})
