import { Hint, Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    className='govuk-input--width-10'
    hint={<Hint>Must be between 6 and 8 digits long</Hint>}
    inputMode='numeric'
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is your account number?
      </Label>
    }
    name='account-number-with-numeric'
    spellCheck={false}
  />
)
