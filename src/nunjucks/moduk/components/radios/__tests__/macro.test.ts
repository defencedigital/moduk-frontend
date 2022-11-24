import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Radios', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/radios/__examples__/default.njk')).not.toThrowError()
  })
})
