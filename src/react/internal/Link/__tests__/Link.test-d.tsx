import { Component, forwardRef, type Ref } from 'react'
import { describe, expectTypeOf, test } from 'vitest'
import { LinkBase, type LinkComponent } from '../Link'

class RouterLink extends Component<{ to: string }> {
  render() {
    return null
  }
}

/* eslint-disable-next-line react/display-name */
export const LinkExtended: LinkComponent<{ active: boolean }> = forwardRef<unknown, { active: boolean }>(() => null)

describe('Link', () => {
  test('LinkBase types', () => {
    expectTypeOf(LinkBase<'a'>).parameter(0).toMatchTypeOf<
      {
        component?: 'a'
        ref?: Ref<HTMLAnchorElement>
      }
    >()
    expectTypeOf(LinkBase<typeof RouterLink>).parameter(0).toMatchTypeOf<
      {
        component?: typeof RouterLink
        ref?: Ref<RouterLink>
        to: string
      }
    >()
  })

  test('LinkComponent types', () => {
    expectTypeOf<LinkComponent<{ active: boolean }>>().parameter(0).toMatchTypeOf<
      {
        active: boolean
      }
    >()
    expectTypeOf(LinkExtended<'a'>).parameter(0).toMatchTypeOf<
      {
        component?: 'a'
        ref?: Ref<HTMLAnchorElement>
        active: boolean
      }
    >()
    expectTypeOf(LinkExtended<typeof RouterLink>).parameter(0).toMatchTypeOf<
      {
        component?: typeof RouterLink
        ref?: Ref<RouterLink>
        to: string
        active: boolean
      }
    >()
  })
})
