import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Warning text', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/warning-text/__examples__/default.njk')).not.toThrowError()
  })
})
