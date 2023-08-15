import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('Phase Banner', () => {
  it('renders the content', () => {
    const template = `{% from "moduk/components/phase-banner/macro.njk" import modukPhaseBanner -%}

{{ modukPhaseBanner({
  tag: {
    text: "alpha"
  },
  classes: "custom-class",
  attributes: {
    "data-testid": "phase-banner"
  },
  html: 'This is a new service – your <a class="govuk-link" href="#">feedback</a> will help us to improve it.'
}) -}}
`
    const element = render(template)
    expect(element.querySelector('.govuk-tag')).toHaveClass('moduk-tag--default')
    expect(element.querySelector('.govuk-tag')).toHaveTextContent('alpha')
    expect(element).toHaveClass('custom-class')
    expect(element).toHaveAttribute('data-testid', 'phase-banner')
  })

  it('overrides the tag component class name', () => {
    const element = renderFile('moduk/components/phase-banner/__examples__/with-tag-override.njk')
    expect(element.querySelector('.govuk-tag')).toHaveClass('govuk-tag--grey')
    expect(element.querySelector('.govuk-tag')).not.toHaveClass('moduk-tag--default')
  })

  it('overrides the text', () => {
    const element = renderFile('moduk/components/phase-banner/__examples__/with-text.njk')
    expect(element).toHaveTextContent('This is a new service')
  })
})
