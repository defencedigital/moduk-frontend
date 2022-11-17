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
      toHaveNoViolations(): Promise<void>
    }
  }
}
