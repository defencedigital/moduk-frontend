import clsx from 'clsx'
import { type ReactNode } from 'react'

export interface SummaryListValueProps {
  children?: ReactNode
  className?: string
}

/**
 * Value for a summary list row.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryListValue = ({ children, className }: SummaryListValueProps) => (
  <dd className={clsx('govuk-summary-list__value', className)}>{children}</dd>
)
