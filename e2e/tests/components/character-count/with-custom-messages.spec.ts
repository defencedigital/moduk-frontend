import { expect, test } from './fixtures'

test.describe('character count, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/character-count/with-custom-messages')
  })

  test('displays the character count hint', async ({ getCharacterCountMessage }) => {
    await expect(
      getCharacterCountMessage('description text'),
    ).toBeVisible()
  })

  test('updates the character count hint after typing within the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').type('Hello')

    const expected = 'characters under limit, other, 195'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the character count hint after typing one under the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill(`${'Hello'.repeat(39)}ello`)

    const expected = 'characters under limit, one, 1'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the character count hint when at the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill('Hello'.repeat(40))

    const expected = 'characters at limit'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the character count hint when one over the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill(`${'Hello'.repeat(40)}H`)

    const expected = 'characters over limit, one, 1'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test('updates the character count hint after typing over the limit', async ({ getCharacterCountMessage, getScreenReaderMessage, page }) => {
    await page.getByRole('textbox').fill('Hello'.repeat(45))

    const expected = 'characters over limit, other, 25'
    await expect(getCharacterCountMessage(expected)).toBeVisible()
    await expect(getScreenReaderMessage()).toHaveText(expected)
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays a static character count hint', async ({ getCharacterCountMessage }) => {
      await expect(
        getCharacterCountMessage('description text, 200'),
      ).toBeVisible()
    })
  })
})
