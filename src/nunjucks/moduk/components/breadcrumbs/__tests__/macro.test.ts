import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Breadcrumbs', async () => {
  it('renders the content', () => {
    const items = [
      {
        text: 'Home',
        href: '#',
      },
      {
        text: 'Components',
        href: '#',
      },
      {
        text: 'Breadcrumbs',
        href: '#',
      },
    ]
    expect(() =>
      render(`
{%- from "moduk/components/breadcrumbs/macro.njk" import modukBreadcrumbs -%}

{{ modukBreadcrumbs({
  items: ${JSON.stringify(items)}
}) }}
`)
    ).not.toThrowError()
  })
})
