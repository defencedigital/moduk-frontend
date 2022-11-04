import { expect, test } from '@playwright/test'
import { findExamples } from '../src/test-utils'

test.describe('@visual-regression', () => {
  findExamples().forEach(([component, exampleNames]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`/components/${component}/${exampleName}`)
          })

          test('matches the saved screenshot', async ({ page }) => {
            await expect(page.locator('#root > *:first-child')).toHaveScreenshot([component, `${exampleName}-.png`], {
              scale: 'device',
            })
          })
        })
      })
    })
  })
})
