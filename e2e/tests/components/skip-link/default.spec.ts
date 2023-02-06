import { expect, test as base } from '../../../fixtures'

const test = base.extend({
  content: ({ page }, use) =>
    use(
      page.getByText(
        'To view the skip link component tab to this example, or click inside this example and press tab.',
      ),
    ),
  skipLink: ({ page }, use) => use(page.getByText('Skip to main content')),
})

test.describe('skip link, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/skip-link/default')
  })

  test('does not display the component initially', async ({ skipLink }) => {
    await expect(skipLink).toHaveCSS('height', '1px')
  })

  test('displays the component after pressing Tab', async ({ page, skipLink }) => {
    await page.keyboard.press('Tab')

    await expect(skipLink).not.toHaveCSS('height', '1px')
    await expect(skipLink).toBeFocused()
  })

  test('scrolls to and focuses the content when the skip link is clicked', async ({ content, page, skipLink }) => {
    await skipLink.focus()
    await skipLink.click()

    expect(page.url()).toMatch(/#content$/)
    await expect(content).toBeFocused()
  })

  test.describe('when JavaScript is disabled', () => {
    test.use({ javaScriptEnabled: false })

    test('scrolls to the content when the skip link is clicked', async ({ content, page, skipLink }) => {
      await skipLink.focus()
      await skipLink.click()

      expect(page.url()).toMatch(/#content$/)
      await expect(content).not.toBeFocused()
    })
  })

  test.describe('@visual-regression', () => {
    test('matches the saved screenshot when focused', async ({ componentElement, skipLink }) => {
      await skipLink.focus()

      await expect(componentElement).toHaveScreenshot('focused.png')
    })
  })
})
