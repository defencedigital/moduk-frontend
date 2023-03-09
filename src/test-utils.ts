import { globSync } from 'glob'
import { basename, dirname } from 'node:path'
import { createNunjucksEnvironment } from './index'

export function render(
  templateString: string,
  args: Record<string, unknown> = {},
): HTMLElement {
  const env = createNunjucksEnvironment()
  document.body.innerHTML = env.renderString(templateString, args)

  if (!(document.body.firstElementChild instanceof HTMLElement)) {
    throw new Error('Failed to render the provided template')
  }

  return document.body.firstElementChild
}

export function findExamples(): [string, string[]][] {
  const glob = `${__dirname}/nunjucks/**/__examples__/*.njk`
  const paths = globSync(glob, { windowsPathsNoEscape: true }).sort()
  const exampleList = paths.map((path) => {
    const component = basename(dirname(dirname(path)))
    const exampleName = basename(path, '.njk')
    return {
      component,
      exampleName,
    }
  })

  const examples: Record<string, string[]> = {}
  exampleList.forEach(({ component, exampleName }) => {
    examples[component] ??= []
    examples[component].push(exampleName)
  })

  return Object.entries(examples)
}

export function renderFile(
  filepath: string,
  args: Record<string, unknown> = {},
): HTMLElement {
  const env = createNunjucksEnvironment()
  document.body.innerHTML = env.render(filepath, args)

  if (!(document.body.firstElementChild instanceof HTMLElement)) {
    throw new Error('Failed to render the provided template')
  }

  return document.body.firstElementChild
}
