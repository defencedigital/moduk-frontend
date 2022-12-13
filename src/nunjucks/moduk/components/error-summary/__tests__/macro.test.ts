import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('error summary', async () => {
  it('renders the content when using the text property', () => {
    const element = renderFile('moduk/components/error-summary/__examples__/default.njk')
    expect(element).toHaveTextContent('There is a problem')
  })

  it('renders the error description when using the descriptionHtml property', () => {
    const element = render(`
{% from "moduk/components/error-summary/macro.njk" import modukErrorSummary %}

{{ modukErrorSummary({
    titleText: "There is a problem",
    descriptionHtml: "There have been some errors when trying to submit your application.",
    errorList: [
      {
        text: "The start date of the contract must include a year",
        href: "#incorect-date-format"
      },
      {
        text: "Enter your full name",
        href: "#full-name-input"
      }
    ]
  }) }}
`)
    expect(element).toHaveTextContent('There have been some errors when trying to submit your application.')
  })

  it('renders the content when using a call block', () => {
    const element = render(`
{% from "moduk/components/error-summary/macro.njk" import modukErrorSummary %}

{% call modukErrorSummary({
    titleText: "There is a problem",
    errorList: [
      {
        text: "The start date of the contract must include a year",
        href: "#incorect-date-format"
      },
      {
        text: "Enter your full name",
        href: "#full-name-input"
      }
    ]
  }) %}
  There have been some errors<br> when trying to submit your application.
{% endcall %}
`)
    expect(element).toContainHTML('There have been some errors<br> when')
  })
})
