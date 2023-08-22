import { Input, InputPrefix, InputSuffix, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    className='govuk-input--width-5'
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the cost per item, in pounds?
      </Label>
    }
    name='cost-per-item-with-prefix-and-suffix'
    prefix={<InputPrefix>£</InputPrefix>}
    suffix={<InputSuffix>per item</InputSuffix>}
    spellCheck={false}
  />
)
