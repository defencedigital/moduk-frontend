import clsx from 'clsx'
import { isNil } from 'lodash'
import { type ChangeEventHandler, forwardRef, useCallback, useEffect, useId, useState } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { Textarea, type TextareaProps } from '../textarea'
import { useThrottledValue } from './useThrottledValue'

const DEFAULT_MESSAGES = {
  charactersUnderLimit: {
    one: 'You have %{count} character remaining',
    other: 'You have %{count} characters remaining',
  },
  charactersAtLimit: 'You have 0 characters remaining',
  charactersOverLimit: {
    one: 'You have %{count} character too many',
    other: 'You have %{count} characters too many',
  },
  textareaDescriptionCharacters: 'You can enter up to %{count} characters',
  textareaDescriptionWords: 'You can enter up to %{count} words',
  wordsUnderLimit: {
    one: 'You have %{count} word remaining',
    other: 'You have %{count} words remaining',
  },
  wordsAtLimit: 'You have 0 words remaining',
  wordsOverLimitText: {
    one: 'You have %{count} word too many',
    other: 'You have %{count} words too many',
  },
} as const

interface CharacterCountPluralMessage {
  /**
   * Message for when the count is exactly 1.
   */
  one: string
  /**
   * Message for when the count is not 1.
   */
  other: string
}

interface CharacterCountMessageConfig {
  /**
   * Message made available to assistive technologies to describe
   * that the component accepts only a limited amount of content.
   * It is visible on the page when JavaScript is unavailable. The
   * component will replace the `%{count}` placeholder with the
   * value of the `maxLength` or `maxWords` prop.
   */
  textareaDescriptionText?: string
  /**
   * Message displayed when the number of characters is under the
   * configured maximum, `maxLength`. This message is displayed
   * visually and through assistive technologies. The component
   * will replace the `%{count}` placeholder with the number of
   * remaining characters.
   */
  charactersUnderLimitText?: Partial<CharacterCountPluralMessage>
  /**
   * Message displayed when the number of characters reaches the
   * configured maximum, `maxLength`. This message is displayed
   * visually and through assistive technologies.
   */
  charactersAtLimitText?: string
  /**
   * Message displayed when the number of characters is over the
   * configured maximum, `maxLength`. This message is displayed
   * visually and through assistive technologies. The component
   * will replace the `%{count}` placeholder with the number of
   * characters above the maximum.
   */
  charactersOverLimitText?: Partial<CharacterCountPluralMessage>
  /**
   * Message displayed when the number of words is under the
   * configured maximum, `maxWords`. This message is displayed
   * visually and through assistive technologies. The component
   * will replace the `%{count}` placeholder with the number of
   * remaining words.
   */
  wordsUnderLimitText?: Partial<CharacterCountPluralMessage>
  /**
   * Message displayed when the number of words reaches the
   * configured maximum, `maxWords`. This message is displayed
   * visually and through assistive technologies.
   */
  wordsAtLimitText?: string
  /**
   * Message displayed when the number of words is over the
   * configured maximum, `maxWords`. This message is displayed
   * visually and through assistive technologies. The component
   * will replace the `%{count}` placeholder with the number of
   * characters above the maximum.
   */
  wordsOverLimitText?: Partial<CharacterCountPluralMessage>
}

interface BaseCharacterCountProps extends TextareaProps, CharacterCountMessageConfig {
  /**
   * Defines a threshold that must be reached before the
   * character count message is displayed.
   * This is a value between 0 and 1, representing a percentage
   * of `maxLength` or `maxWords`.
   */
  threshold?: number
  /**
   * CSS classes to add to the count message.
   */
  countMessageClassname?: string
}

interface LengthCharacterCountProps extends BaseCharacterCountProps {
  /**
   * The maximum number of characters. Required if `maxWords`
   * is not set. Cannot be set if `maxWords` is set.
   */
  maxLength: number
  maxWords?: never
}

interface WordCharacterCountProps extends BaseCharacterCountProps {
  maxLength?: never
  /**
   * The maximum number of words. Required if `maxLength`
   * is not set. Cannot be set if `maxLength` is set.
   */
  maxWords: number
}

export type CharacterCountProps = LengthCharacterCountProps | WordCharacterCountProps

function getStatusMessageTemplate(
  countInUnits: number,
  maxUnits: number,
  isWords: boolean,
  messageOverrides: CharacterCountMessageConfig,
) {
  if (countInUnits > maxUnits) {
    return isWords
      ? (messageOverrides.wordsOverLimitText?.other ?? DEFAULT_MESSAGES.wordsOverLimitText.other)
      : (messageOverrides.charactersOverLimitText?.other ?? DEFAULT_MESSAGES.charactersOverLimit.other)
  }

  if (countInUnits === maxUnits) {
    return isWords
      ? (messageOverrides.wordsAtLimitText ?? DEFAULT_MESSAGES.wordsAtLimit)
      : (messageOverrides.charactersAtLimitText ?? DEFAULT_MESSAGES.charactersAtLimit)
  }

  return isWords
    ? (messageOverrides.wordsUnderLimitText?.other ?? DEFAULT_MESSAGES.wordsUnderLimit.other)
    : (messageOverrides.charactersUnderLimitText?.other ?? DEFAULT_MESSAGES.charactersUnderLimit.other)
}

function formatMessage(message: string, count: number) {
  return message.replace('%{count}', count.toString())
}

function formatStatusMessage(
  countInUnits: number,
  maxUnits: number,
  isWords: boolean,
  messageOverrides: CharacterCountMessageConfig,
) {
  const messageTemplate = getStatusMessageTemplate(countInUnits, maxUnits, isWords, messageOverrides)
  return formatMessage(messageTemplate, Math.abs(maxUnits - countInUnits))
}

function formatDescriptionMessage(
  maxUnits: number,
  isWords: boolean,
  textareaDescriptionText: string | undefined,
) {
  const descriptionMessageTemplate = textareaDescriptionText
    ?? (isWords ? DEFAULT_MESSAGES.textareaDescriptionWords : DEFAULT_MESSAGES.textareaDescriptionCharacters)
  return formatMessage(descriptionMessageTemplate, maxUnits)
}

function getTextUnitCount(text: string, isWords: boolean) {
  return isWords ? (text.match(/\S+/g) || []).length : text.length
}

/**
 * Character count.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <CharacterCount
 *   label={
 *     <Label className='govuk-label--l' isPageHeading>
 *       Can you provide more detail?
 *     </Label>
 *   }
 *   hint={<Hint>Do not include personal information like your service number.</Hint>}
 *   maxLength={200}
 *   name='with-hint'
 * />
 */
export const CharacterCount = forwardRef<HTMLTextAreaElement, CharacterCountProps>(
  (
    {
      charactersAtLimitText,
      charactersOverLimitText,
      charactersUnderLimitText,
      className,
      countMessageClassname,
      maxLength,
      maxWords,
      onChange,
      textareaDescriptionText,
      threshold,
      wordsAtLimitText,
      wordsOverLimitText,
      wordsUnderLimitText,
      ...rest
    },
    forwardedRef,
  ) => {
    const messageOverrides: CharacterCountMessageConfig = {
      charactersAtLimitText,
      charactersOverLimitText,
      charactersUnderLimitText,
      textareaDescriptionText,
      wordsAtLimitText,
      wordsOverLimitText,
      wordsUnderLimitText,
    }

    const [isClient, setClient] = useState(false)
    const { rawValue, setValue, throttledValue } = useThrottledValue()
    const id = useId()

    useEffect(() => {
      setClient(true)
    }, [])

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
      setValue(event.currentTarget.value)
      onChange?.(event)
    }, [onChange, setValue])

    const isWords = !isNil(maxWords)
    const maxUnits = (isWords ? maxWords : maxLength) ?? 0
    const rawValueUnitCount = getTextUnitCount(rawValue, isWords)
    const throttledValueUnitCount = getTextUnitCount(throttledValue, isWords)
    const isOverLimit = rawValueUnitCount > maxUnits
    const isOverThreshold = isNil(threshold) || isOverLimit || ((rawValueUnitCount / maxUnits) >= threshold)

    const visibleMessage = formatStatusMessage(rawValueUnitCount, maxUnits, isWords, messageOverrides)
    const screenReaderMessage = formatStatusMessage(throttledValueUnitCount, maxUnits, isWords, messageOverrides)
    const descriptionMessage = formatDescriptionMessage(maxUnits, isWords, textareaDescriptionText)

    const callbackRef = useCallback((element: HTMLTextAreaElement | null) => {
      // Update the value on mount; ensures values pre-populated by
      // the browser on page refresh are captured
      setValue(element?.value ?? '')
    }, [setValue])

    return (
      <div className='govuk-character-count'>
        <Textarea
          ref={mergeRefs([callbackRef, forwardedRef])}
          className={clsx(className, isOverLimit && 'govuk-textarea--error')}
          id={id}
          onChange={handleChange}
          {...rest}
        >
          {isClient && (
            <>
              <div
                id={`${id}-info`}
                className={clsx(
                  'govuk-hint',
                  'govuk-character-count__message',
                  'govuk-visually-hidden',
                  countMessageClassname,
                )}
              >
                {descriptionMessage}
              </div>
              <div
                className={clsx(
                  'govuk-character-count__message',
                  'govuk-character-count__status',
                  !isOverLimit && 'govuk-hint',
                  isOverLimit && 'govuk-error-message',
                  !isOverThreshold && 'govuk-character-count__message--disabled',
                  countMessageClassname,
                )}
                aria-hidden='true'
              >
                {visibleMessage}
              </div>
              <div
                className='govuk-character-count__sr-status govuk-visually-hidden'
                aria-hidden={!isOverThreshold}
                aria-live='polite'
              >
                {screenReaderMessage}
              </div>
            </>
          )}
        </Textarea>
        {!isClient && (
          <div
            id={`${id}-info`}
            className={clsx('govuk-hint', 'govuk-character-count__message', countMessageClassname)}
          >
            {descriptionMessage}
          </div>
        )}
      </div>
    )
  },
)

CharacterCount.displayName = 'CharacterCount'
