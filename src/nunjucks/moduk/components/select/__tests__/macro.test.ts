import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Select', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/select/__examples__/default.njk')).not.toThrowError()
  })
})
