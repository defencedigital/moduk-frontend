import { get, set } from 'lodash'
import { readFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import type { ConfigureOptions, Environment } from 'nunjucks'
import { configure, runtime } from 'nunjucks'

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

const addCustomMODUKClass: NunjucksFilter = (
  params,
  classToAdd: string,
  options?: { not?: RegExp | string; path?: string },
) => {
  const propertyPath = options?.path ?? 'classes'
  const classesFromPath = get(params, propertyPath, '')

  const classes: string[] = classesFromPath.split(' ')
  const notRegex = options?.not

  const hasNotClass = notRegex && classes.some((className) => className.trim().match(notRegex))
  if (hasNotClass) {
    return params
  }

  return set(
    { ...params },
    propertyPath,
    classesFromPath ? `${classToAdd} ${classesFromPath}` : `${classToAdd}`,
  )
}

/**
 * Add MOD.UK svg loader to an existing Nunjucks environment.
 * @param nunjucksEnv Nunjucks environment
 * Based from https://github.com/11ty/eleventy/blob/v2.0.1/src/Engines/Nunjucks.js#L166-L228
 * as https://mozilla.github.io/nunjucks/api.html#custom-tags
 */
function addSvgExtension(nunjucksEnv: Environment) {
  class SvgLoader {
    tags = ['MODUKincludeSVG']

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    parse(parser: any, nodes: any) {
      const tok = parser.nextToken()
      const args = parser.parseSignature(null, true)
      parser.advanceAfterBlockEnd(tok.value)

      return new nodes.CallExtension(this, 'run', args, null)
    }

    /* eslint-disable-next-line class-methods-use-this */
    run(_context: unknown, fileName: string) {
      const svgPath = `${join(__dirname, '..', '/assets/svg', basename(fileName, '.svg'))}.svg`
      return new runtime.SafeString(readFileSync(svgPath, 'utf8'))
    }
  }
  nunjucksEnv.addExtension('MODUKincludeSVG', new SvgLoader())
}

/**
 * Add MOD.UK extensions to an existing Nunjucks environment.
 * @param nunjucksEnv Nunjucks environment
 */
export function addNunjucksExtensions(nunjucksEnv: Environment) {
  nunjucksEnv.addFilter('addCustomMODUKClass', addCustomMODUKClass)
  addSvgExtension(nunjucksEnv)
}

/**
 * @deprecated Use addNunjucksExtensions instead.
 * Add MOD.UK filters to an existing Nunjucks environment.
 * @param nunjucksEnv Nunjucks environment
 */
export function addMODUKFilters(nunjucksEnv: Environment) {
  addNunjucksExtensions(nunjucksEnv)
}

/**
 * Create a Nunjucks environment pre-configured with MOD.UK template paths and internal extensions.
 *
 * @param templatePaths Additional template paths to add
 * @param options Environment configuration options
 */
export function createNunjucksEnvironment(
  templatePaths: string[] = [],
  options: ConfigureOptions | undefined = undefined,
) {
  const env = configure([...getNunjucksPaths(), ...templatePaths], options)
  addNunjucksExtensions(env)
  return env
}
