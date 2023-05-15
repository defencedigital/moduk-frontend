import type { Environment } from 'nunjucks'
import nunjucks from 'nunjucks'
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

  it.each([
    { expectedPath: 'classes', options: {} },
    { expectedPath: 'inner.classes', options: { path: 'inner.classes' } },
  ])(
    'adds the custom class to $expectedPath when classes is unset',
    ({ expectedPath, options }) => {
      expect(
        addCustomMODUKClass({}, 'moduk-custom', options),
      ).toHaveProperty(
        expectedPath,
        'moduk-custom',
      )
    },
  )

  it.each([
    { expectedPath: 'classes', options: {}, args: { classes: 'a-class' } },
    { expectedPath: 'inner.classes', options: { path: 'inner.classes' }, args: { inner: { classes: 'a-class' } } },
  ])(
    'adds the custom class to $expectedPath when classes is set',
    ({ expectedPath, options, args }) => {
      expect(
        addCustomMODUKClass(args, 'moduk-custom', options),
      ).toHaveProperty(
        expectedPath,
        'moduk-custom a-class',
      )
    },
  )

  it.each([
    { expectedPath: 'classes', options: {} },
    { expectedPath: 'inner.classes', options: { path: 'inner.classes' } },
  ])(
    'adds the custom class to $expectedPath when a not class is specified and classes is unset',
    ({ expectedPath, options }) => {
      expect(addCustomMODUKClass({}, 'moduk-custom', { not: /^match/, ...options })).toHaveProperty(
        expectedPath,
        'moduk-custom',
      )
    },
  )

  it.each([
    { expectedPath: 'classes', options: {}, args: { classes: 'not-matching' } },
    { expectedPath: 'inner.classes', options: { path: 'inner.classes' }, args: { inner: { classes: 'not-matching' } } },
  ])(
    'adds the custom class to $expectedPath when there is no matching not class',
    ({ expectedPath, options, args }) => {
      expect(addCustomMODUKClass(args, 'moduk-custom', { not: /^match/, ...options })).toHaveProperty(
        expectedPath,
        'moduk-custom not-matching',
      )
    },
  )

  it.each([
    { expectedPath: 'classes', options: {}, args: { classes: 'matching' } },
    { expectedPath: 'inner.classes', options: { path: 'inner.classes' }, args: { inner: { classes: 'matching' } } },
  ])(
    'does not add the custom class to $expectedPath when there is a matching not class',
    ({ expectedPath, options, args }) => {
      expect(addCustomMODUKClass(args, 'moduk-custom', { not: /^match/, ...options })).toHaveProperty(
        expectedPath,
        'matching',
      )
    },
  )
})
