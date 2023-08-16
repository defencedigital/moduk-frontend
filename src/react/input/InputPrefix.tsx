import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface InputPrefixProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

/**
 * @experimental React components are in alpha and subject to change.
 */
export const InputPrefix = forwardRef<HTMLDivElement, InputPrefixProps>(({ children, className }, ref) => (
  <div ref={ref} className={clsx('govuk-input__prefix', className)} aria-hidden='true'>{children}</div>
))

InputPrefix.displayName = 'InputPrefix'
