import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Accordion', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/accordion/__examples__/default.njk')).not.toThrowError()
  })
})
