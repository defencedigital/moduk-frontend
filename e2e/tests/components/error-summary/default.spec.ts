import { expect, test } from '../../../fixtures'

test.describe('error summary, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/error-summary/default')
  })

  test('displays the error summary heading', async ({ componentElement }) => {
    await expect(componentElement.getByRole('heading', { level: 2 })).toHaveText('There is a problem')
  })

  test('displays the error summary list', async ({ componentElement }) => {
    await expect(componentElement.getByRole('listitem')).toHaveText([
      'The start date of the contract must include a year',
      'Enter your full name',
    ])
  })
})
