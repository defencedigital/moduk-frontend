import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Inset text', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/inset-text/__examples__/default.njk')).not.toThrowError()
  })
})
