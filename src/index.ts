import { Environment } from 'nunjucks'
import * as path from 'path'

export function getNunjucksPaths() {
  const govukFrontendPath = path.dirname(path.dirname(require.resolve('govuk-frontend')))
  return [
    `${__dirname}/nunjucks`,
    govukFrontendPath,
  ]
}

export function addModukFilter(nunjucksEnv: Environment) {
  nunjucksEnv.addFilter('addMODUKClass', (params) => ({
    ...params,
    classes: params.classes ? `moduk ${params.classes}` : 'moduk',
  }))
}
