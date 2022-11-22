import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { renderFile } from '../../../../../test-utils'

const basePath = 'moduk/components/button/__examples__'

describe('Button', async () => {
  it('renders the content', () => {
    expect(() => {
      renderFile(path.join(basePath, 'default.njk'))
    }).not.toThrowError()
  })

  it('add disabled attribute', () => {
    expect(renderFile(path.join(basePath, 'disabled.njk'))).toBeDisabled()
  })

  it('renders the secondary button', () => {
    expect(renderFile(path.join(basePath, 'secondary.njk'))).toHaveClass('govuk-button--secondary')
  })

  it('renders the warning button', () => {
    expect(renderFile(path.join(basePath, 'warning.njk'))).toHaveClass('govuk-button--warning')
  })
})
