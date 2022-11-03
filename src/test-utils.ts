import { createNunjucksEnvironment } from './index'

export function render(templateString: string, args: Record<string, unknown> = {}): Element {
  const env = createNunjucksEnvironment()
  document.body.innerHTML = env.renderString(templateString, args)

  if (!document.body.firstElementChild) {
    throw new Error('Failed to render the provided template')
  }

  return document.body.firstElementChild
}
