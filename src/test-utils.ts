import nunjucks from 'nunjucks'

import { addModukFilter, getNunjucksPaths } from './index'

export function render(templateString: string, args: Record<string, unknown> = {}) {
  const env = nunjucks.configure(getNunjucksPaths())
  addModukFilter(env)
  document.body.innerHTML = env.renderString(templateString, args)
  return document.body.firstElementChild
}
