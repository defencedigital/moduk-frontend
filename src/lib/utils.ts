import { configure, ConfigureOptions, Environment } from 'nunjucks'
import { dirname, join } from 'path'

/**
 * Get the template paths that should be specified when manually creating a new
 * Nunjucks environment.
 */
export function getNunjucksPaths() {
  const govukFrontendPath = dirname(dirname(require.resolve('govuk-frontend')))
  return [
    join(__dirname, '..', 'nunjucks'),
    govukFrontendPath,
  ]
}

type NunjucksFilter = Parameters<Environment['addFilter']>[1]

const addCustomMODUKClass: NunjucksFilter = (params, classToAdd: string, options?: { not?: RegExp | string }) => {
  const classes: string[] = (params.classes ?? '').split(' ')
  const notRegex = options?.not

  const hasNotClass = notRegex && classes.some((className) => className.trim().match(notRegex))

  if (hasNotClass) {
    return params
  }

  return {
    ...params,
    classes: params.classes ? `${classToAdd} ${params.classes}` : `${classToAdd}`,
  }
}

/**
 * Add MOD.UK filters to an existing Nunjucks environment.
 * @param nunjucksEnv Nunjucks environment
 */
export function addMODUKFilters(nunjucksEnv: Environment) {
  nunjucksEnv.addFilter('addCustomMODUKClass', addCustomMODUKClass)
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
  addMODUKFilters(env)
  return env
}
