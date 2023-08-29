import { SkipLink } from '@moduk/frontend/react'

export const Example = () => (
  <div>
    <p className='govuk-body' id='content'>
      To view the skip link component tab to this example, or click inside this example and press tab.
    </p>
    <SkipLink href='#content'>Skip to main content</SkipLink>
  </div>
)
