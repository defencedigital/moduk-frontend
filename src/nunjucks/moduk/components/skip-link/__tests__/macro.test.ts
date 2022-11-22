import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Skip link', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/skip-link/__examples__/default.njk')).not.toThrowError()
  })
})
