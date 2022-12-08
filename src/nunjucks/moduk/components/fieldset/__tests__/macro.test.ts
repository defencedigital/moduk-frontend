import { describe, expect, it } from 'vitest'

import { getByLabelText } from '@testing-library/dom'
import { render, renderFile } from '../../../../../test-utils'

describe('Fieldset', async () => {
  it('renders the content', () => {
    const element = renderFile('moduk/components/fieldset/__examples__/default.njk')
    expect(getByLabelText(element, 'Address line 1')).toBeInTheDocument()
  })

  it('renders the content when passed using the html property', () => {
    const element = render(`
{% from "moduk/components/input/macro.njk" import modukInput %}
{% from "moduk/components/fieldset/macro.njk" import modukFieldset %}

{% set html %}
  {{ modukInput({
    label: {
      text: 'Address line 1'
    },
    id: "address-line-1",
    name: "address-line-1",
    autocomplete: "address-line1"
  }) }}
{% endset %}


{{ modukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  },
  html: html
}) }}
`)

    expect(getByLabelText(element, 'Address line 1')).toBeInTheDocument()
  })
})
