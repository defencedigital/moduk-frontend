import { Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <div>
    <Input
      className='govuk-!-width-full'
      label={<Label>Full width</Label>}
      name='full'
    />
    <Input
      className='govuk-!-width-three-quarters'
      label={<Label>Three-quarters width</Label>}
      name='three-quarters'
    />
    <Input
      className='govuk-!-width-two-thirds'
      label={<Label>Two-thirds width</Label>}
      name='two-thirds'
    />
    <Input
      className='govuk-!-width-one-half'
      label={<Label>One-half width</Label>}
      name='one-half'
    />
    <Input
      className='govuk-!-width-one-third'
      label={<Label>One-third width</Label>}
      name='one-third'
    />
    <Input
      className='govuk-!-width-one-quarter'
      label={<Label>One-quarter width</Label>}
      name='one-quarter'
    />
  </div>
)
