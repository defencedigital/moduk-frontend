import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Tabs', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/tabs/__examples__/default.njk')).not.toThrowError()
  })
})
