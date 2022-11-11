import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Breadcrumbs', async () => {
  it('adds the moduk CSS class and renders the content', () => {
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
    const element = render(`
{%- from "moduk/components/breadcrumbs/macro.njk" import modukBreadcrumbs -%}

{{ modukBreadcrumbs({
  items: ${JSON.stringify(items)}
}) }}
`)

    expect(element).toHaveClass('moduk')
  })
})
