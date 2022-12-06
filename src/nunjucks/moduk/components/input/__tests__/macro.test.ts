import { screen } from '@testing-library/dom'
import { describe, expect, it } from 'vitest'
import { renderFile } from '../../../../../test-utils'

describe('Input', () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/input/__examples__/default.njk')).not.toThrowError()
  })

  it('renders the content with prefix and suffix', () => {
    const element = renderFile('moduk/components/input/__examples__/with-prefix-and-suffix.njk')

    expect(element.querySelector('.govuk-input__prefix')).toBeInTheDocument()
    expect(element.querySelector('.govuk-input__suffix')).toBeInTheDocument()
  })

  it('renders the content numeric inputmode', () => {
    renderFile('moduk/components/input/__examples__/with-numeric.njk')

    expect(screen.getByRole('textbox')).toHaveAttribute('inputmode', 'numeric')
  })
})
