import { expect, test } from './fixtures'

test.describe('character count, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/character-count/default')
  })

  test('displays the heading', async ({ page }) => {
    await expect(
      page.getByRole('heading'),
    ).toHaveText('What is the event about?')
  })

  test('displays the main hint', async ({ page }) => {
    await expect(
      page.getByText('This will be shown on the public page for the event, below the event title'),
    ).toBeVisible()
  })

  test('displays the input', async ({ page }) => {
    await expect(page.getByRole('textbox')).toBeVisible()
  })

  test('displays the character count hint', async ({ getCharacterCountMessage }) => {
    await expect(
      getCharacterCountMessage('You have 200 characters remaining'),
    ).toBeVisible()
  })

  test('updates the character count hint after typing within the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').type('Hello')

    await expect(
      getCharacterCountMessage('You have 195 characters remaining'),
    ).toBeVisible()
  })

  test('updates the character count hint after typing over the limit', async ({ getCharacterCountMessage, page }) => {
    await page.getByRole('textbox').fill('Hello'.repeat(45))

    await expect(
      getCharacterCountMessage('You have 25 characters too many'),
    ).toBeVisible()
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('displays a static character count hint', async ({ getCharacterCountMessage }) => {
      await expect(
        getCharacterCountMessage('You can enter up to 200 characters'),
      ).toBeVisible()
    })

    test.describe('@visual-regression', () => {
      test('matches the saved screenshot', async ({ componentElement }) => {
        await expect(componentElement).toHaveScreenshot('no-javascript.png')
      })
    })
  })
})
