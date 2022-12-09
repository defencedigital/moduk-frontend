import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('File upload', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/file-upload/__examples__/default.njk')).not.toThrowError()
  })
})
