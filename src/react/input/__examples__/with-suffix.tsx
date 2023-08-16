import { Input, InputSuffix, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Input
    className='govuk-input--width-5'
    label={
      <Label className='govuk-label--l' isPageHeading>
        What is the weight in kilograms?
      </Label>
    }
    name='weight-with-suffix'
    suffix={<InputSuffix>kg</InputSuffix>}
    spellCheck={false}
  />
)
