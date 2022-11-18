import { expect, test } from '@playwright/test'

test.describe('header, with service name and navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/header/with-service-name-and-navigation')
  })

  test.describe('when JavaScript is enabled', () => {
    test.describe('@desktop', () => {
      test('has six links in total', async ({ page }) => {
        await expect(
          page.getByRole('link'),
        ).toHaveCount(6)
      })
    })

    test.describe('@mobile', () => {
      test('has two links in total', async ({ page }) => {
        await expect(
          page.getByRole('link'),
        ).toHaveCount(2)
      })

      test('has six links after clicking the menu button', async ({ page }) => {
        await page.getByText('Menu').click()

        await expect(
          page.getByRole('link'),
        ).toHaveCount(6)
      })
    })
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('has six links in total', async ({ page }) => {
      await expect(
        page.getByRole('link'),
      ).toHaveCount(6)
    })
  })

  test.describe('@visual-regression', () => {
    test.describe('when JavaScript is disabled', () => {
      test.use({ javaScriptEnabled: false })

      test('matches the saved screenshot when the active navigation link is hovered', async ({ page }) => {
        await page.getByText('Navigation item 1').hover()

        await expect(page.locator('#root > *:first-child')).toHaveScreenshot('navigation-item-1-hover.png')
      })

      test('matches the saved screenshot when the second navigation link is hovered', async ({ page }) => {
        await page.getByText('Navigation item 2').hover()

        await expect(page.locator('#root > *:first-child')).toHaveScreenshot('navigation-item-2-hover.png')
      })
    })

    test.describe('when JavaScript is enabled', () => {
      test.describe('@mobile', () => {
        test('matches the saved screenshot when the menu is open', async ({ page }) => {
          await page.getByText('Menu').click()

          await expect(page.locator('#root > *:first-child')).toHaveScreenshot('menu-open.png')
        })
      })
    })
  })
})
