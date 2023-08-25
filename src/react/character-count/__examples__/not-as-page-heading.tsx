import { CharacterCount, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    label={
      <Label>
        Describe the nature of your event
      </Label>
    }
    maxLength={200}
    name='not-as-page-heading'
  />
)
