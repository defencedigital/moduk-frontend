import { expect, test } from './fixtures'

test.describe('character count, with threshold', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/character-count/with-threshold')
  })

  test('does not display the character count hint', async ({ getCharacterCountMessage }) => {
    await expect(
      getCharacterCountMessage('You have 29 characters remaining'),
    ).not.toBeVisible()
  })

  test('displays the character count hint after typing within the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').type('A')

    await expect(
      getCharacterCountMessage('You have 28 characters remaining'),
    ).toBeVisible()
  })

  test('updates the character count hint after typing over the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').fill('Hello'.repeat(23))

    await expect(
      getCharacterCountMessage('You have 3 characters too many'),
    ).toBeVisible()
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays a static character count hint', async ({ getCharacterCountMessage }) => {
      await expect(getCharacterCountMessage('You can enter up to 112 characters ')).toBeVisible()
    })

    test.describe('@visual-regression', () => {
      test('matches the saved screenshot', async ({ componentElement }) => {
        await expect(componentElement).toHaveScreenshot('no-javascript.png')
      })
    })
  })
})
