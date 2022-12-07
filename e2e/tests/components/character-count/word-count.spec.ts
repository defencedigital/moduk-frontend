import { expect, test } from './fixtures'

test.describe('character count, word count', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/character-count/word-count')
  })

  test('displays the word count hint', async ({ getCharacterCountMessage }) => {
    await expect(
      getCharacterCountMessage('You have 150 words remaining'),
    ).toBeVisible()
  })

  test('updates the word count hint after typing words within the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').type('Hello there')

    await expect(
      getCharacterCountMessage('You have 148 words remaining'),
    ).toBeVisible()
  })

  test('updates the word count hint after typing words over the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').fill('word '.repeat(155))

    await expect(
      getCharacterCountMessage('You have 5 words too many'),
    ).toBeVisible()
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays a static word count hint', async ({ getCharacterCountMessage }) => {
      await expect(
        getCharacterCountMessage('You can enter up to 150 words'),
      ).toBeVisible()
    })

    test.describe('@visual-regression', () => {
      test('matches the saved screenshot', async ({ componentElement }) => {
        await expect(componentElement).toHaveScreenshot('no-javascript.png')
      })
    })
  })
})
