import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface SummaryListKeyProps {
  children?: ReactNode
  className?: string
}

/**
 * Key for a summary list row.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryListKey = ({ children, className }: SummaryListKeyProps) => (
  <dt className={clsx('govuk-summary-list__key', className)}>{children}</dt>
)
