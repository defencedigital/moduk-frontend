import { ErrorMessage, Hint, Label, Textarea } from '@moduk/frontend/react'

export const Example = () => (
  <Textarea
    errorMessage={<ErrorMessage>Enter some details about the event</ErrorMessage>}
    hint={<Hint>This will be shown on the public page for the event, below the event title</Hint>}
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the event about?
      </Label>
    }
    name='event-description-with-error'
  />
)
