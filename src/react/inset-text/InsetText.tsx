import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface InsetTextProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Inset text content.
   */
  children: ReactNode
}

/**
 * Inset text.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <InsetText>You’ll get confirmation that we have received your report within 5 working days.</InsetText>
 */
export const InsetText = forwardRef<HTMLDivElement, InsetTextProps>(
  ({ children, className, ...rest }, ref) => (
    <div ref={ref} className={clsx('govuk-inset-text', className)} {...rest}>
      {children}
    </div>
  ),
)

InsetText.displayName = 'InsetText'
