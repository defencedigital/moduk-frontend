import { Fieldset, FieldsetLegend, Input, Label } from '@moduk/frontend/react'

export const Example = () => (
  <Fieldset>
    <FieldsetLegend className='govuk-fieldset__legend--l' isPageHeading>
      What is your address?
    </FieldsetLegend>
    <Input
      autoComplete='address-line1'
      label={<Label>Address line 1</Label>}
      name='address-line-1'
    />
    <Input
      autoComplete='address-line2'
      label={<Label>Address line 2 (optional)</Label>}
      name='address-line-2'
    />
    <Input
      autoComplete='address-level2'
      className='govuk-!-width-two-thirds'
      label={<Label>Town or city</Label>}
      name='address-town'
    />
    <Input
      autoComplete='postal-code'
      className='govuk-input--width-10'
      label={<Label>Postcode</Label>}
      name='address-postcode'
    />
  </Fieldset>
)
