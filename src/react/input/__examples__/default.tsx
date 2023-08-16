import { Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the name of the event?
      </Label>
    }
    name='event-name-default'
  />
)
