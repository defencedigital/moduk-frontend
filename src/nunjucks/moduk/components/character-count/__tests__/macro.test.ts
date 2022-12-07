import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Character count', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/character-count/__examples__/default.njk')).not.toThrowError()
  })
})
