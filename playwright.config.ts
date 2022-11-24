import AxeBuilder from '@axe-core/playwright'
import { devices, expect, Page, PlaywrightTestConfig } from '@playwright/test'

expect.extend({
  toHaveNoViolations: async (
    page: Page,
    disabledRules?: string[],
  ) => {
    const axeResults = await new AxeBuilder({ page })
      .include('#root')
      .disableRules(disabledRules ?? [])
      .analyze()

    const pass = axeResults.violations.length === 0
    if (pass) {
      return {
        message: () => 'expected violations',
        pass: true,
      }
    }
    const messages = axeResults.violations.map((violation) => (
      [
        `${violation.impact}(${violation.id}): ${violation.help}`,
        ...violation.nodes.map((node) => node.html),
      ].join('\n')
    ))

    return {
      message: () => messages.join('\n'),
      pass: false,
    }
  },
})

const config: PlaywrightTestConfig = {
  testDir: './e2e/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      scale: 'device',
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  maxFailures: process.env.CI ? 10 : undefined,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    [process.env.CI ? 'github' : 'line'],
    ['html', { outputFolder: './e2e/output/html/', open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:8080',
    trace: process.env.PLAYWRIGHT_TRACE
      ? 'retain-on-failure'
      : 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      grepInvert: /@mobile/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      grepInvert: /@mobile/,
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'mobile-chrome',
      grepInvert: /@desktop/,
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'mobile-safari',
      grepInvert: /@desktop/,
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
  outputDir: 'e2e/output/artefacts/',
  webServer: {
    command: 'npm run serve:no-reload',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
  },
}
export default config
