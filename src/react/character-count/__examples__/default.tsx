import { CharacterCount, Hint, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    label={
      <Label className='govuk-label--l' isPageHeading>
        Can you provide more detail?
      </Label>
    }
    hint={<Hint>Do not include personal information like your service number.</Hint>}
    maxLength={200}
    name='with-hint'
  />
)
