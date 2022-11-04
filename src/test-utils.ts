import glob from 'glob'
import { basename, dirname } from 'path'
import { createNunjucksEnvironment } from './index'

export function render(templateString: string, args: Record<string, unknown> = {}): Element {
  const env = createNunjucksEnvironment()
  document.body.innerHTML = env.renderString(templateString, args)

  if (!document.body.firstElementChild) {
    throw new Error('Failed to render the provided template')
  }

  return document.body.firstElementChild
}

export function findExamples(): [string, string[]][] {
  const paths = glob.sync(`${__dirname}/nunjucks/**/__examples__/*.njk`)
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
