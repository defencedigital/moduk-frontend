import { CharacterCount, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    label={
      <Label className='govuk-label--l' isPageHeading>
        Enter a job description
      </Label>
    }
    maxWords={150}
    name='word-count'
  />
)
