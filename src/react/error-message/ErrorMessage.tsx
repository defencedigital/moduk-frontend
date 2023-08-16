import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useContext } from 'react'
import { FormGroupContext } from '../internal/FormGroup'

export interface ErrorMessageProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
  /**
   * A visually hidden prefix used before the error message.
   */
  visuallyHiddenText?: string
}

/**
 * @experimental React components are in alpha and subject to change.
 */
export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ children, className, id, visuallyHiddenText = 'Error', ...rest }, ref) => {
    const context = useContext(FormGroupContext)

    return (
      <p
        ref={ref}
        className={clsx('govuk-error-message', className)}
        {...rest}
        id={context.id ? `${context.id}-error` : id}
      >
        {visuallyHiddenText && <span className='govuk-visually-hidden'>{visuallyHiddenText}:</span>}
        {children}
      </p>
    )
  },
)

ErrorMessage.displayName = 'ErrorMessage'
