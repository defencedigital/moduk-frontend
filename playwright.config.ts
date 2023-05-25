import AxeBuilder from '@axe-core/playwright'
import type { Expect, Locator, Page, PlaywrightTestConfig, Project } from '@playwright/test'
import { devices, expect } from '@playwright/test'

import { escapeRegExp } from 'lodash'
import { findReactExamples } from './src/test-utils'

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
  async toHaveDescription(this: ReturnType<Expect['getState']>, locator: Locator, expected: string) {
    const page = locator.page()
    const describedBy = await locator.getAttribute('aria-describedby')
    const describedByIds = `#${describedBy?.split(' ').join(', #')}`

    const result = page.locator(describedByIds, {
      hasText: expected,
    })

    if (await result.isVisible()) {
      return {
        message: () => `Expected aria-describedby not to have text content ${this.utils.printReceived(expected)}`,
        pass: true,
      }
    }

    const receivedResult = page.locator(describedByIds)
    const receivedTextPromises: Promise<string | null>[] = []

    const count = await receivedResult.count()
    for (let i = 0; i < count; i += 1) {
      receivedTextPromises.push(receivedResult.nth(i).textContent())
    }

    const receivedText = await Promise.all(receivedTextPromises)

    return {
      message: () => `
        ${
        this.utils.matcherHint('toHaveDescription', 'HTMLElement', expected, {
          isNot: this.isNot,
          promise: this.promise,
        })
      }\n
        Received: ${this.utils.printReceived(receivedText.map((text) => text?.trim()).join('\n'))}`,
      pass: false,
    }
  },
})

const baseURL = 'http://localhost:8080'

interface FrameworkProject extends Project {
  grepInvert: RegExp
}

const libraryProjects = (projects: FrameworkProject[]): Project[] => {
  const reactComponents = findReactExamples().map(([component]) => escapeRegExp(component)).join('|')

  return projects.flatMap(({ grepInvert, ...project }) => [
    {
      ...project,
      grepInvert: [grepInvert, /@react(\s|$)/],
    },
    {
      ...project,
      name: `react-${project.name}`,
      snapshotPathTemplate: `{testDir}/__screenshots__/{testFilePath}/{arg}--${project.name}{ext}`,
      testMatch: [
        new RegExp(`components/(${reactComponents})/.+\\.spec\\.ts$`),
        'accessibility.spec.ts',
        'visual-regression.spec.ts',
      ],
      grepInvert: [grepInvert, /@nunjucks(\s|$)/],
      use: {
        ...project.use,
        baseURL: new URL('/react/', baseURL).toString(),
      },
    },
  ])
}

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      scale: 'device',
    },
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  maxFailures: process.env.CI ? 10 : undefined,
  outputDir: 'e2e/output/artefacts/',
  projects: libraryProjects([
    {
      name: 'chromium',
      grepInvert: /(@mobile|@mobile-and-tablet|@tablet)(\s|$)/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      grepInvert: /(@mobile|@mobile-and-tablet|@tablet)(\s|$)/,
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'mobile-chrome',
      grepInvert: /(@tablet|@tablet-and-desktop|@desktop)(\s|$)/,
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'tablet-safari',
      grepInvert: /(@mobile|@desktop)(\s|$)/,
      use: {
        ...devices['iPad (gen 6)'],
      },
    },
  ]),
  reporter: [
    [process.env.CI ? 'github' : 'line'],
    ['html', { outputFolder: './e2e/output/html/', open: 'never' }],
  ],
  retries: process.env.CI ? 1 : 0,
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}--{projectName}{ext}',
  testDir: './e2e/tests',
  timeout: 30 * 1000,
  use: {
    baseURL,
    trace: process.env.PLAYWRIGHT_TRACE
      ? 'retain-on-failure'
      : 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  webServer: {
    command: 'npm start',
    url: baseURL,
    reuseExistingServer: true,
  },
  workers: process.env.CI ? 2 : undefined,
}
export default config
