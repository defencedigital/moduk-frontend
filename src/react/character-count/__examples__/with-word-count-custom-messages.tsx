import { CharacterCount, Hint, Label } from '@moduk/frontend/react'

export const Example = () => (
  <CharacterCount
    label={
      <Label className='govuk-label--l' isPageHeading>
        Can you provide more detail?
      </Label>
    }
    hint={<Hint>Do not include personal information like your service number.</Hint>}
    wordsAtLimitText='words at limit'
    wordsOverLimitText={{ one: 'words over limit, one, %{count}', other: 'words over limit, other, %{count}' }}
    wordsUnderLimitText={{ one: 'words under limit, one, %{count}', other: 'words under limit, other, %{count}' }}
    textareaDescriptionText='description text, %{count}'
    maxWords={5}
    name='with-custom-messages-word-count'
  />
)
