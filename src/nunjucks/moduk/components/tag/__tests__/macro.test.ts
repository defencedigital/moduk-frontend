import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Tag', async () => {
  it('adds a modifier CSS class when specified', () => {
    const element = render(`
{%- from "moduk/components/tag/macro.njk" import modukTag -%}

{{ modukTag({
  text: "Inactive",
  classes: "govuk-tag--grey"
}) }}
`)

    expect(element).toHaveClass('govuk-tag--grey')
  })
})
