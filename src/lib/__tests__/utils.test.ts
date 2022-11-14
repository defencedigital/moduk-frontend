import nunjucks, { Environment } from 'nunjucks'
import { beforeEach, describe, expect, it } from 'vitest'
import { addMODUKFilters } from '../utils'

function createNunjucksEnv() {
  const env = nunjucks.configure({})
  addMODUKFilters(env)
  return env
}

describe('addCustomMODUKClass', () => {
  let addCustomMODUKClass: ReturnType<Environment['getFilter']>

  beforeEach(() => {
    const env = createNunjucksEnv()
    addCustomMODUKClass = env.getFilter('addCustomMODUKClass')
  })

  it('adds the custom class when classes is unset', () => {
    expect(
      addCustomMODUKClass({}, 'moduk-custom'),
    ).toHaveProperty(
      'classes',
      'moduk-custom',
    )
  })

  it('adds the custom class when classes is set', () => {
    expect(
      addCustomMODUKClass({ classes: 'a-class' }, 'moduk-custom'),
    ).toHaveProperty(
      'classes',
      'moduk-custom a-class',
    )
  })

  it('adds the custom class when a not class is specified and classes is unset', () => {
    expect(addCustomMODUKClass({}, 'moduk-custom', { not: /^match/ })).toHaveProperty(
      'classes',
      'moduk-custom',
    )
  })

  it('adds the custom class when there is no matching not class', () => {
    expect(addCustomMODUKClass({ classes: 'not-matching' }, 'moduk-custom', { not: /^match/ })).toHaveProperty(
      'classes',
      'moduk-custom not-matching',
    )
  })

  it('does not add the custom class when there is a matching not class', () => {
    expect(addCustomMODUKClass({ classes: 'matching' }, 'moduk-custom', { not: /^match/ })).toHaveProperty(
      'classes',
      'matching',
    )
  })
})
