import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Error message', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/error-message/__examples__/default.njk')).not.toThrowError()
  })
})
