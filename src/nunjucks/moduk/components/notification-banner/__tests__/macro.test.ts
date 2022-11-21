import { describe, expect, it } from 'vitest'

import { renderFile } from '../../../../../test-utils'

describe('Notification banner', async () => {
  it('renders the content', () => {
    expect(() => renderFile('moduk/components/notification-banner/__examples__/default.njk')).not.toThrowError()
  })
})
