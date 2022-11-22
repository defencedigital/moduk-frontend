import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Pagination', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/pagination/__examples__/default.njk')).not.toThrowError()
  })
})
