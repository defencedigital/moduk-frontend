import { expect, test } from './fixtures'

test.describe('character count, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/character-count/with-word-count-custom-messages')
  })

  test('displays the word count hint', async ({ getCharacterCountMessage }) => {
    await expect(
      getCharacterCountMessage('description text'),
    ).toBeVisible()
  })

  test('updates the word count hint after typing within the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').type('Hello')

    const expected = 'words under limit, other, 4'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the word count hint after typing one under the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill(`${'Hello '.repeat(4)}`)

    const expected = 'words under limit, one, 1'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the word count hint when at the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill('Hello '.repeat(5))

    const expected = 'words at limit'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the word count hint when one over the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill(`${'Hello '.repeat(6)}`)

    const expected = 'words over limit, one, 1'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the word count hint after typing over the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill('Hello '.repeat(7))

    const expected = 'words over limit, other, 2'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays a static word count hint', async ({ getCharacterCountMessage }) => {
      await expect(
        getCharacterCountMessage('description text, 5'),
      ).toBeVisible()
    })
  })
})
