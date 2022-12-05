import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Textarea', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/textarea/__examples__/default.njk')).not.toThrowError()
  })
})
