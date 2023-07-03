import { findNunjucksExamples, findReactExamples } from '../../src/test-utils'
import { expect, test } from '../fixtures'

// There are various known failures in the GOV.UK Design System:
// https://github.com/alphagov/govuk-frontend/issues/1280#issuecomment-509588851
const DISABLED_RULES: Record<string, Record<string, string[]>> = {
  accordion: {
    '*': ['aria-allowed-attr'],
  },
  checkboxes: {
    'with-conditional-reveal': ['aria-allowed-attr'],
  },
  radios: {
    'with-conditional-reveal': ['aria-allowed-attr'],
  },
}

test.describe('@accessibility', () => {
  const accessibilitySuite = ([component, exampleNames]: [string, string[]]) => {
    test.describe(component, () => {
      exampleNames.forEach((exampleName) => {
        test.describe(exampleName, () => {
          test.beforeEach(async ({ page }) => {
            await page.goto(`./components/${component}/${exampleName}`)
          })

          test('passes accessibility checks', async ({ page }) => {
            const disabledRules = [
              ...(DISABLED_RULES[component]?.['*'] ?? []),
              ...(DISABLED_RULES[component]?.[exampleName] ?? []),
            ]
            await expect(page).toHaveNoViolations(disabledRules)
          })
        })
      })
    })
  }

  test.describe('@nunjucks', () => {
    findNunjucksExamples().forEach((example) => {
      accessibilitySuite(example)
    })
  })

  test.describe('@react', () => {
    findReactExamples().forEach((example) => {
      accessibilitySuite(example)
    })
  })
})
