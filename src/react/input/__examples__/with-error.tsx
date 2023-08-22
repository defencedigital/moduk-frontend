import { ErrorMessage, Hint, Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    errorMessage={<ErrorMessage>Enter an event name</ErrorMessage>}
    hint={<Hint>The name you’ll use on promotional material</Hint>}
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the name of the event?
      </Label>
    }
    name='event-name-with-error'
  />
)
