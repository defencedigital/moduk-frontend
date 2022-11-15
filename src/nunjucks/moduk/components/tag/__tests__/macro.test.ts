import { describe, expect, it } from 'vitest'

import { render } from '../../../../../test-utils'

describe('Tag', async () => {
  it('adds the moduk-tag--default CSS class and renders the content', () => {
    const element = render(`
{%- from "moduk/components/tag/macro.njk" import modukTag -%}

{{ modukTag({
  text: "Completed"
}) }}
`)

    expect(element).toHaveClass('moduk-tag--default')
    expect(element).toHaveTextContent('Completed')
  })

  it('adds a modifier CSS class when specified and omits moduk-tag--default', () => {
    const element = render(`
{%- from "moduk/components/tag/macro.njk" import modukTag -%}

{{ modukTag({
  text: "Inactive",
  classes: "govuk-tag--grey"
}) }}
`)

    expect(element).toHaveClass('govuk-tag--grey')
    expect(element).not.toHaveClass('moduk-tag--default')
  })
})
