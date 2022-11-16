import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Cookie Banner', () => {
  it('renders the content', () => {
    expect(() => renderFile(join(__dirname, '../__examples__/default.njk'))).not.toThrowError()
  })
})
