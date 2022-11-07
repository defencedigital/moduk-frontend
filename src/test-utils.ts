import glob from 'glob'
import nunjucks from 'nunjucks'
import { basename, dirname } from 'path'

import { addModukFilter, getNunjucksPaths } from './index'

export function render(templateString: string, args: Record<string, unknown> = {}) {
  const env = nunjucks.configure(getNunjucksPaths())
  addModukFilter(env)
  document.body.innerHTML = env.renderString(templateString, args)
  return document.body.firstElementChild
}

export function findExamples() {
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

  return examples
}
