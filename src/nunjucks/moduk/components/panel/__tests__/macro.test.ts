import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('Panel', async () => {
  it('renders the content using the html property', () => {
    const element = renderFile('moduk/components/panel/__examples__/default.njk')
    expect(element).toHaveTextContent('HDJ2123F')
  })

  it('renders the content when using the text property', () => {
    const element = render(`
{% from "moduk/components/panel/macro.njk" import modukPanel %}

{{ modukPanel({
  titleText: "Application complete",
  text: "Your reference number is HDJ2123F"
}) }}
`)
    expect(element).toHaveTextContent('HDJ2123F')
  })

  it('renders the content when using a call block', () => {
    const element = render(`
{% from "moduk/components/panel/macro.njk" import modukPanel %}

{% call modukPanel({
  titleText: "Application complete" 
}) %}
  Your reference number<br><strong>HDJ2123F</strong>
{% endcall %}
`)
    expect(element).toContainHTML('Your reference number<br><strong>HDJ2123F</strong>')
  })
})
