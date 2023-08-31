import { CharacterCount, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    defaultValue='Type another letter into this field after this message to see the threshold feature'
    label={
      <Label className='govuk-label--l' isPageHeading>
        Can you provide more detail?
      </Label>
    }
    maxLength={112}
    name='with-hint'
    threshold={0.75}
  />
)
