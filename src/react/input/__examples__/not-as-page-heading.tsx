import { Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    label={<Label>What is the name of the event?</Label>}
    name='event-name-with-not-as-page-heading'
  />
)
