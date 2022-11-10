import { configure, ConfigureOptions, Environment } from 'nunjucks'
import { dirname } from 'path'

/**
 * Get the template paths that should be specified when manually creating a new
 * Nunjucks environment.
 */
export function getNunjucksPaths() {
  const govukFrontendPath = dirname(dirname(require.resolve('govuk-frontend')))
  return [
    `${__dirname}/nunjucks`,
    govukFrontendPath,
  ]
}

/**
 * Add MOD.UK filters to an existing Nunjucks environment.
 * @param nunjucksEnv Nunjucks environment
 */
export function addMODUKFilter(nunjucksEnv: Environment) {
  nunjucksEnv.addFilter('addMODUKClass', (params) => ({
    ...params,
    classes: params.classes ? `moduk ${params.classes}` : 'moduk',
  }))
}

/**
 * Create a Nunjucks environment with MOD.UK template paths and filters pre-configured.
 *
 * @param templatePaths Additional template paths to add
 * @param options Environment configuration options
 */
export function createNunjucksEnvironment(
  templatePaths: string[] = [],
  options: ConfigureOptions | undefined = undefined,
) {
  const env = configure([...getNunjucksPaths(), ...templatePaths], options)
  addMODUKFilter(env)
  return env
}
