import { describe, expect, it } from 'vitest'

import { render, renderFile } from '../../../../../test-utils'

describe('Notification banner', async () => {
  it('renders the content when using the text property', () => {
    const element = renderFile('moduk/components/notification-banner/__examples__/default.njk')
    expect(element).toHaveTextContent('There may be a delay')
  })

  it('renders the content when using the html property', () => {
    const element = render(`
{% from "moduk/components/notification-banner/macro.njk" import modukNotificationBanner %}

{{ modukNotificationBanner({
  html: "There may be a delay in processing your application because of the coronavirus outbreak."
}) }}
`)
    expect(element).toHaveTextContent('There may be a delay')
  })

  it('renders the content when using a call block', () => {
    const element = render(`
{% from "moduk/components/notification-banner/macro.njk" import modukNotificationBanner %}

{% call modukNotificationBanner({}) %}
  There may be a delay<br> in processing your application because of the coronavirus outbreak.
{% endcall %}
`)
    expect(element).toContainHTML('There may be a delay<br> in')
  })
})
