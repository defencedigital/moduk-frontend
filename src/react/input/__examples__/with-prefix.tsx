import { Input, InputPrefix, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    className='govuk-input--width-5'
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the cost in pounds?
      </Label>
    }
    name='cost-with-prefix'
    prefix={<InputPrefix>£</InputPrefix>}
    spellCheck={false}
  />
)
