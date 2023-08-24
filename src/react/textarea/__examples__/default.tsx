import { Hint, Label, Textarea } from '@moduk/frontend/react'

export const Example = () => (
  <Textarea
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the event about?
      </Label>
    }
    hint={<Hint>This will be shown on the public page for the event, below the event title</Hint>}
    name='event-description'
  />
)
