import { Label, Textarea } from '@moduk/frontend/react'

export const Example = () => (
  <Textarea
    label={<Label>What is the event about?</Label>}
    name='event-description-not-as-page-heading'
  />
)
