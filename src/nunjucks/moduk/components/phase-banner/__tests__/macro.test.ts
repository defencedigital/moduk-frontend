import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Phase Banner', () => {
  it('renders the content', () => {
    const element = renderFile('moduk/components/phase-banner/__examples__/default.njk')
    expect(element.querySelector('.govuk-tag')).toHaveClass('moduk-tag--default')
    expect(element.querySelector('.govuk-tag')).toHaveTextContent('alpha')
  })

  it('overrides the tag component class name', () => {
    const element = renderFile('moduk/components/phase-banner/__examples__/with-tag-override.njk')
    expect(element.querySelector('.govuk-tag')).toHaveClass('govuk-tag--grey')
  })

  it('overrides the text', () => {
    const element = renderFile('moduk/components/phase-banner/__examples__/with-text.njk')
    expect(element).toHaveTextContent('This is a new service')
  })
})
