import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Date input', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/date-input/__examples__/default.njk')).not.toThrowError()
  })
})
