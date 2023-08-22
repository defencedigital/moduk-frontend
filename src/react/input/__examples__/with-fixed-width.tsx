import { Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <div>
    <Input
      className='govuk-input--width-20'
      label={<Label>20 character width</Label>}
      name='width-20'
    />
    <Input
      className='govuk-input--width-10'
      label={<Label>10 character width</Label>}
      name='width-10'
    />
    <Input
      className='govuk-input--width-5'
      label={<Label>5 character width</Label>}
      name='width-5'
    />
    <Input
      className='govuk-input--width-4'
      label={<Label>4 character width</Label>}
      name='width-4'
    />
    <Input
      className='govuk-input--width-3'
      label={<Label>3 character width</Label>}
      name='width-3'
    />
    <Input
      className='govuk-input--width-2'
      label={<Label>2 character width</Label>}
      name='width-2'
    />
  </div>
)
