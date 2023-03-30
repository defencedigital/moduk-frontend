import { expect, test } from '../../../fixtures'

test.describe('tabs, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/tabs/default')
  })

  test.describe('@tablet-and-desktop', () => {
    test('displays four tabs', async ({ page }) => {
      await expect(page.getByRole('tab')).toHaveCount(4)
    })

    test('displays the contents of one tab', async ({ page }) => {
      await expect(page.getByRole('tabpanel')).toHaveCount(1)
      await expect(page.getByRole('table')).toHaveCount(1)
    })
  })

  test.describe('@mobile', () => {
    test('does not display any tabs', async ({ page }) => {
      await expect(page.getByRole('tab')).toHaveCount(0)
      await expect(page.getByRole('tabpanel')).toHaveCount(0)
    })

    test('displays the contents list', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
      await expect(page.getByRole('listitem')).toHaveCount(4)
    })

    test('displays four tables', async ({ page }) => {
      await expect(page.getByRole('table')).toHaveCount(4)
    })
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('does not display any tabs', async ({ page }) => {
      await expect(page.getByRole('tab')).toHaveCount(0)
      await expect(page.getByRole('tabpanel')).toHaveCount(0)
    })

    test('displays the contents list', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Contents' })).toBeVisible()
      await expect(page.getByRole('listitem')).toHaveCount(4)
    })

    test('displays four tables', async ({ page }) => {
      await expect(page.getByRole('table')).toHaveCount(4)
    })

    test.describe('@visual-regression', () => {
      test('matches the saved screenshot', async ({ componentElement }) => {
        await expect(componentElement).toHaveScreenshot('no-javascript.png')
      })
    })
  })
})
