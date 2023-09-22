import { NotificationBanner } from '@moduk/frontend/react'

export const Example = () => (
  <NotificationBanner>
    <p className='govuk-notification-banner__heading'>
      {'You have 7 days left to send your application. '}
      <a className='govuk-notification-banner__link' href='#'>View application</a>.
    </p>
  </NotificationBanner>
)
