import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

export {}

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
    interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }

  namespace PlaywrightTest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toHaveNoViolations(disabledRules?: string[]): Promise<void>
      toHaveDescription(text: string): Promise<void>
    }
  }

  declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
  }
}
