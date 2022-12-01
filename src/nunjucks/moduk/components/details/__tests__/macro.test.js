import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Details', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/details/__examples__/default.njk')).not.toThrowError()
  })
})
