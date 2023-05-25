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

  it('renders the MOOUK svg logo', () => {
    const el = render(`
{%- from "moduk/components/header/macro.njk" import modukHeader -%}

{{ modukHeader({ }) }}
`)

    expect(el.getElementsByTagName('svg')).toHaveLength(1)
  })
})
