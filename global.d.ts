export {}

declare global {
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
