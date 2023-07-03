import { expect, test } from '../../../fixtures'

test.describe('accordion, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/accordion/with-remember-expanded-off')
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

    test('displays not paragraphs after reloading', async ({ page }) => {
      await page.reload()

      await expect(page.locator('[hidden="until-found"] > p')).toHaveCount(4)
    })
  })
})
