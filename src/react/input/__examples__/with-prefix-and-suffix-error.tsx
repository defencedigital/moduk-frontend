import { ErrorMessage, Input, InputPrefix, InputSuffix, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    className='govuk-input--width-5'
    errorMessage={<ErrorMessage>Enter a cost per item, in pounds</ErrorMessage>}
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the cost per item, in pounds?
      </Label>
    }
    name='cost-per-item-with-prefix-and-suffix-error'
    prefix={<InputPrefix>£</InputPrefix>}
    suffix={<InputSuffix>per item</InputSuffix>}
    spellCheck={false}
  />
)
