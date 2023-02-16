import { expect, test } from '../../../fixtures'

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

      test.describe('@accessibility', () => {
        test('passes accessibility checks when the active navigation link is hovered', async ({ page }) => {
          await page.getByText('Navigation item 1').hover()
          await expect(page).toHaveNoViolations()
        })

        test('passes accessibility checks when the active navigation link is focused', async ({ page }) => {
          await page.getByText('Navigation item 1').focus()
          await expect(page).toHaveNoViolations()
        })

        test('passes accessibility checks when the second navigation link is hovered', async ({ page }) => {
          await page.getByText('Navigation item 2').hover()
          await expect(page).toHaveNoViolations()
        })
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

      test('matches the saved screenshot when the active navigation link is hovered', async ({ componentElement, page }) => {
        await page.getByText('Navigation item 1').hover()

        await expect(componentElement).toHaveScreenshot('navigation-item-1-hover.png')
      })

      test('matches the saved screenshot when the active navigation link is focused', async ({ componentElement, page }) => {
        await page.getByText('Navigation item 1').focus()

        await expect(componentElement).toHaveScreenshot('navigation-item-1-focus.png')
      })

      test('matches the saved screenshot when the active navigation link is focused and hovered', async ({ componentElement, page }) => {
        const item1 = page.getByText('Navigation item 1')
        await item1.focus()
        await item1.hover()

        await expect(componentElement).toHaveScreenshot('navigation-item-1-focus-and-hover.png')
      })

      test('matches the saved screenshot when the second navigation link is hovered', async ({ componentElement, page }) => {
        await page.getByText('Navigation item 2').hover()

        await expect(componentElement).toHaveScreenshot('navigation-item-2-hover.png')
      })
    })

    test.describe('when JavaScript is enabled', () => {
      test.describe('@mobile', () => {
        test('matches the saved screenshot when the menu is open', async ({ componentElement, page }) => {
          await page.getByText('Menu').click()

          await expect(componentElement).toHaveScreenshot('menu-open.png')
        })
      })
    })
  })
})
