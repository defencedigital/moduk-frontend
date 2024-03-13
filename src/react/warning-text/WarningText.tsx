import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface WarningTextProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Warning text content.
   */
  children: ReactNode
  /**
   * The fallback text for the icon. Defaults to ‘Warning’
   */
  iconFallbackText?: string
}

/**
 * Warning text.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <WarningText>Completed</WarningText>
 */
export const WarningText = forwardRef<HTMLDivElement, WarningTextProps>(
  ({ children, className, iconFallbackText = 'Warning', ...rest }, ref) => (
    <div ref={ref} className={clsx('govuk-warning-text', className)} {...rest}>
      <span className='govuk-warning-text__icon' aria-hidden='true'>!</span>
      <strong className='govuk-warning-text__text'>
        <span className='govuk-visually-hidden'>{iconFallbackText}</span>
        {children}
      </strong>
    </div>
  ),
)

WarningText.displayName = 'WarningText'
