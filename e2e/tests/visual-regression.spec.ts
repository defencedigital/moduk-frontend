import { findNunjucksExamples, findReactExamples } from '../../src/test-utils'
import { expect, test } from '../fixtures'

test.describe('@visual-regression', () => {
  const visualRegressionSuite = ([component, exampleNames]: [string, string[]]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`./components/${component}/${exampleName}`)
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
