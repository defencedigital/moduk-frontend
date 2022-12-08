import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('Details', async () => {
  it('renders the content when using the text property', () => {
    const element = renderFile('moduk/components/details/__examples__/default.njk')
    expect(element).toHaveTextContent('We need to know the organisation')
  })

  it('renders the content when using the html property', () => {
    const element = render(`
{% from "moduk/components/details/macro.njk" import modukDetails %}

{{ modukDetails({
  summaryText: "Help with organisation",
  html: "We need to know the organisation you work for so we can forward your request to the correct team."
}) }}
`)
    expect(element).toHaveTextContent('We need to know the organisation')
  })

  it('renders the content when using a call block', () => {
    const element = render(`
{% from "moduk/components/details/macro.njk" import modukDetails %}

{% call modukDetails({
  summaryText: "Help with organisation" 
}) %}
  We need to know the organisation<br>you work for so we can forward your request to the correct team.
{% endcall %}
`)
    expect(element).toContainHTML('We need to know the organisation<br>you')
  })
})
