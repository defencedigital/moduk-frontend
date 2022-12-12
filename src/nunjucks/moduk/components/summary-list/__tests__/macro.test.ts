import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Summary list', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/summary-list/__examples__/default.njk')).not.toThrowError()
  })
})
