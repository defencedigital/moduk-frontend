import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Tag', async () => {
  it('adds the moduk CSS class and renders the content', () => {
    const element = render(`
{%- from "moduk/components/tag/macro.njk" import modukTag -%}

{{ modukTag({
  text: "completed"
}) }}
`)

    expect(element).toHaveClass('moduk')
    expect(element).toHaveTextContent('completed')
  })
})
