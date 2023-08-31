import { NotificationBanner } from '../NotificationBanner'

export const Example = () => (
  <NotificationBanner type='success'>
    <h3 className='govuk-notification-banner__heading'>
      Training outcome recorded and trainee withdrawn
    </h3>
    <p className='govuk-body'>
      Contact <a className='govuk-notification-banner__link' href='#'>example@department.gov.uk</a>
      {' if you think there’s a problem.'}
    </p>
  </NotificationBanner>
)
