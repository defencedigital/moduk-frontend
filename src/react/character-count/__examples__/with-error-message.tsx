import { CharacterCount, ErrorMessage, Hint, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    defaultValue='I would like to request my service record and have a question about what proof of address is acceptable. The guidance doesn’t say if a digital bank statement will be accepted. Can someone please confirm if'
    errorMessage={<ErrorMessage>Detail must be 200 characters or less</ErrorMessage>}
    label={
      <Label className='govuk-label--l' isPageHeading>
        Can you provide more detail?
      </Label>
    }
    hint={<Hint>Do not include personal information like your service number.</Hint>}
    maxLength={200}
    name='exceeding'
  />
)
