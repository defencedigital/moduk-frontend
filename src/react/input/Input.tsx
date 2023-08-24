import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactElement, type ReactNode, useId } from 'react'
import type { ErrorMessageProps } from '../error-message'
import type { HintProps } from '../hint'
import { FormGroup } from '../internal/FormGroup'
import type { LabelProps } from '../label'
import type { InputPrefixProps } from './InputPrefix'
import type { InputSuffixProps } from './InputSuffix'

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'prefix'> {
  /**
   * Optional error message. This should be an instance of ErrorMessage.
   */
  errorMessage?: ReactElement<ErrorMessageProps>
  /**
   * Classes to add to the form group (for example to show error state for the whole group).
   */
  formGroupClassName?: string
  /**
   * Optional hint. This should be an instance of Hint.
   */
  hint?: ReactElement<HintProps>
  /**
   * Label for the input. This should be an instance of Label.
   */
  label: ReactElement<LabelProps>
  /**
   * Optional prefix to display before the input. This should be an instance of InputPrefix.
   */
  prefix?: ReactElement<InputPrefixProps>
  /**
   * Optional suffix to display after the input. This should be an instance of InputSuffix.
   */
  suffix?: ReactElement<InputSuffixProps>
}

function InputWrapper({ children, hasPrefixOrSuffix }: { children: ReactNode; hasPrefixOrSuffix: boolean }) {
  if (hasPrefixOrSuffix) {
    return <div className='govuk-input__wrapper'>{children}</div>
  }

  return <>{children}</>
}

/**
 * Text input.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Input
 *   hint={<Hint>The name you’ll use on promotional material</Hint>}
 *   label={
 *     <Label className='govuk-label--l' isPageHeading>
 *       What is the name of the event?
 *     </Label>
 *   }
 *   name='event-name-with-hint'
 * />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    'aria-describedby': ariaDescribedBy,
    className,
    errorMessage,
    formGroupClassName,
    hint,
    id,
    label,
    prefix,
    suffix,
    type = 'text',
    ...rest
  },
  ref,
) => {
  const autoId = useId()
  const resolvedId = id || autoId
  const resolvedAriaDescribedBy = [
    ariaDescribedBy ?? [],
    errorMessage ? `${resolvedId}-error` : [],
    hint ? `${resolvedId}-hint` : [],
  ].flat().join(' ')

  return (
    <FormGroup className={clsx(errorMessage && 'govuk-form-group--error', formGroupClassName)} id={resolvedId}>
      {label}
      {hint}
      {errorMessage}
      <InputWrapper hasPrefixOrSuffix={Boolean(prefix || suffix)}>
        {prefix}
        <input
          ref={ref}
          aria-describedby={resolvedAriaDescribedBy}
          className={clsx('govuk-input', errorMessage && 'govuk-input--error', className)}
          id={resolvedId}
          type={type}
          {...rest}
        />
        {suffix}
      </InputWrapper>
    </FormGroup>
  )
})

Input.displayName = 'Input'
