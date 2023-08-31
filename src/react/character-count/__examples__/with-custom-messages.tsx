import { CharacterCount, Hint, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    label={
      <Label className='govuk-label--l' isPageHeading>
        Can you provide more detail?
      </Label>
    }
    hint={<Hint>Do not include personal information like your service number.</Hint>}
    charactersAtLimitText='characters at limit'
    charactersOverLimitText={{
      one: 'characters over limit, one, %{count}',
      other: 'characters over limit, other, %{count}',
    }}
    charactersUnderLimitText={{
      one: 'characters under limit, one, %{count}',
      other: 'characters under limit, other, %{count}',
    }}
    textareaDescriptionText='description text, %{count}'
    maxLength={200}
    name='with-custom-messages'
  />
)
