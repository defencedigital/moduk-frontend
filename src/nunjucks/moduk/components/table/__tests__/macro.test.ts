import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Table', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/table/__examples__/default.njk')).not.toThrowError()
  })
})
