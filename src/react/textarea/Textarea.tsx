import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactElement, useId } from 'react'
import type { ErrorMessageProps } from '../error-message'
import type { HintProps } from '../hint'
import { FormGroup } from '../internal/FormGroup'
import type { LabelProps } from '../label'

export interface TextareaProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'children'> {
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
   * Label for the textarea. This should be an instance of Label.
   */
  label: ReactElement<LabelProps>
  /**
   * Optional number of textarea rows (default is 5 rows).
   */
  rows?: ComponentPropsWithoutRef<'textarea'>['rows']
}

/**
 * Textarea.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Textarea
 *   label={
 *     <Label className='govuk-label--l' isPageHeading>
 *       What is the event about?
 *     </Label>
 *   }
 *   hint={<Hint>This will be shown on the public page for the event, below the event title</Hint>}
 *   name='event-description'
 * />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((
  {
    'aria-describedby': ariaDescribedBy,
    className,
    errorMessage,
    formGroupClassName,
    hint,
    id,
    label,
    rows = 5,
    ...rest
  },
  ref,
) => {
  const autoId = useId()
  const resolvedId = id || autoId
  const resolvedAriaDescribedBy = [
    ariaDescribedBy ?? [],
    hint ? `${resolvedId}-hint` : [],
    errorMessage ? `${resolvedId}-error` : [],
  ].flat().join(' ')

  return (
    <FormGroup className={clsx(errorMessage && 'govuk-form-group--error', formGroupClassName)} id={resolvedId}>
      {label}
      {hint}
      {errorMessage}
      <textarea
        ref={ref}
        aria-describedby={resolvedAriaDescribedBy}
        className={clsx('govuk-textarea', errorMessage && 'govuk-textarea--error', className)}
        id={resolvedId}
        rows={rows}
        {...rest}
      />
    </FormGroup>
  )
})

Textarea.displayName = 'Textarea'
