import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('Inset text', async () => {
  it('renders the content when using the text property', () => {
    const element = renderFile('moduk/components/inset-text/__examples__/default.njk')
    expect(element).toHaveTextContent('You’ll get confirmation')
  })

  it('renders the content when using the html property', () => {
    const element = render(`
{% from "moduk/components/inset-text/macro.njk" import modukInsetText %}

{{ modukInsetText({
  summaryText: "Help with organisation",
  html: "You’ll get confirmation that we have received your report within 5 working days."
}) }}
`)
    expect(element).toHaveTextContent('You’ll get confirmation')
  })

  it('renders the content when using a call block', () => {
    const element = render(`
{% from "moduk/components/inset-text/macro.njk" import modukInsetText %}

{% call modukInsetText({
  summaryText: "Help with organisation" 
}) %}
  You’ll get confirmation<br> that we have received your report within 5 working days.
{% endcall %}
`)
    expect(element).toContainHTML('You’ll get confirmation<br> that')
  })
})
