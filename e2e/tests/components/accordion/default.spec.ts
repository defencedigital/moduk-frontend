import { expect, test } from '../../../fixtures'

test.describe('accordion, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/accordion/default')
  })

  test('displays five buttons', async ({ page }) => {
    await expect(page.getByRole('button')).toHaveCount(5)
  })

  test('displays four h2 headings', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2 })).toHaveCount(4)
  })

  test('displays no paragraphs', async ({ page }) => {
    await expect(page.locator('[hidden="until-found"] > p')).toHaveCount(4)
  })

  test.describe('when clicking on the "Show" button for "Writing well for the web"', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'Writing well for the web' }).click()
    })

    test('displays the "Writing well for the web" content', async ({ page }) => {
      await expect(page.locator(':not([hidden="until-found"]) > p')).toHaveText(
        'This is the content for Writing well for the web.',
      )
    })

    test('remembers the expanded state after reloading', async ({ page }) => {
      await page.reload()

      await expect(page.locator(':not([hidden="until-found"]) > p')).toHaveText(
        'This is the content for Writing well for the web.',
      )
    })
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays no buttons', async ({ page }) => {
      await expect(page.getByRole('button')).toHaveCount(0)
    })

    test('displays four headings', async ({ page }) => {
      await expect(page.getByRole('heading')).toHaveCount(4)
    })

    test('displays four paragraphs', async ({ page }) => {
      await expect(page.getByRole('paragraph')).toHaveCount(4)
    })

    test.describe('@visual-regression', () => {
      test('matches the saved screenshot', async ({ componentElement }) => {
        await expect(componentElement).toHaveScreenshot('no-javascript.png')
      })
    })
  })
})
