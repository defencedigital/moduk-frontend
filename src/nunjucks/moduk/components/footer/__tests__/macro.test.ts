import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Footer', async () => {
  it('renders the content', () => {
    expect(() =>
      render(`
{%- from "moduk/components/footer/macro.njk" import modukFooter -%}

{{ modukFooter({ }) }}
`)
    ).not.toThrowError()
  })
})
