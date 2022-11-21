import { findExamples } from '../../src/test-utils'
import { expect, test } from '../fixtures'

test.describe('@accessibility', () => {
  findExamples().forEach(([component, exampleNames]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`/components/${component}/${exampleName}`)
          })

          test('passes accessibility checks', async ({ page }) => {
            await expect(page).toHaveNoViolations()
          })
        })
      })
    })
  })
})
