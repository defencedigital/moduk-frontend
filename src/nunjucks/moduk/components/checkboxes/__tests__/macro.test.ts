import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Checkboxes', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/checkboxes/__examples__/default.njk')).not.toThrowError()
  })
})
