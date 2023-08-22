import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

/**
 * @experimental React components are in alpha and subject to change.
 */
export interface InputSuffixProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

export const InputSuffix = forwardRef<HTMLDivElement, InputSuffixProps>(({ children, className }, ref) => (
  <div ref={ref} className={clsx('govuk-input__suffix', className)} aria-hidden='true'>{children}</div>
))

InputSuffix.displayName = 'InputSuffix'
