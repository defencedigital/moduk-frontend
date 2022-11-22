import { findExamples } from '../../src/test-utils'
import { expect, test } from '../fixtures'

test.describe('@visual-regression', () => {
  findExamples().forEach(([component, exampleNames]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`/components/${component}/${exampleName}`)
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
  })
})
