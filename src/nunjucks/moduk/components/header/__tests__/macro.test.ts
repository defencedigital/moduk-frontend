import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Header', async () => {
  it('renders the content', () => {
    expect(() =>
      render(`
{%- from "moduk/components/header/macro.njk" import modukHeader -%}

{{ modukHeader({ }) }}
`)
    ).not.toThrowError()
  })
})
