import { findNunjucksExamples, findReactExamples } from '../../src/test-utils'
import { expect, test } from '../fixtures'

test.describe('@visual-regression', () => {
  const visualRegressionSuite = ([component, exampleNames]: [string, string[]]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`./components/${component}/${exampleName}`)
            // The `govuk-frontend-supported` class is added to the `<body>` when JavaScript is enabled.
            // This takes a second or two to initialise, and Playwright thinks the page has stabilised before the class is applied.
            // This assertion allows the govuk-frontend-supported class to be applied and the page to stabilise before comparison.
            await expect(page.locator('body')).toHaveClass(/govuk-frontend-supported/)
          })

          test('matches the saved screenshot', async ({ componentElement }) => {
            await expect(componentElement).toHaveScreenshot([
              component,
              exampleName,
              'screenshot.png',
            ])
          })
        })
      })
    })
  }
  test.describe('@nunjucks', () => {
    findNunjucksExamples().forEach((example) => {
      visualRegressionSuite(example)
    })
  })

  test.describe('@react', () => {
    findReactExamples().forEach((example) => {
      visualRegressionSuite(example)
    })
  })
})
