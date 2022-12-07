import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Back link', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/back-link/__examples__/default.njk')).not.toThrowError()
  })
})
