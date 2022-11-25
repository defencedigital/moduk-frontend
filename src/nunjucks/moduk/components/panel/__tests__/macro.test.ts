import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Panel', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/panel/__examples__/default.njk')).not.toThrowError()
  })
})
