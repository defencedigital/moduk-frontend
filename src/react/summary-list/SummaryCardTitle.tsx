import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface SummaryCardTitleProps {
  /**
   * Title text.
   */
  children?: ReactNode
  /**
   * CSS classes to add to the heading element.
   */
  className?: string
  /**
   * The heading HTML tag to use.
   */
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * Title for a summary card.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryCardTitle = ({ children, className, headingTag: Heading = 'h2' }: SummaryCardTitleProps) => (
  <Heading className={clsx('govuk-summary-card__title', className)}>{children}</Heading>
)
