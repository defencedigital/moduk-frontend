import clsx from 'clsx'
import { isValidElement } from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import type { PermissiveChild } from '../internal/PermissiveChild'
import type { SummaryListActionLinkProps } from './SummaryListActionLink'

export interface SummaryCardActionsProps {
  /**
   * Instances of SummaryListActionLink.
   */
  children?: PermissiveChild<SummaryListActionLinkProps>
  className?: string
}

/**
 * Actions to display in the header of a summary card.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryCardActions = ({ children, className }: SummaryCardActionsProps) => {
  const flattenedChildren = flattenChildren(children).filter(isValidElement)

  if (flattenedChildren.length === 1) {
    return (
      <div className={clsx('govuk-summary-card__actions', className)}>
        {children}
      </div>
    )
  }

  return (
    <ul className={clsx('govuk-summary-card__actions', className)}>
      {flattenedChildren.map((child) => (
        <li key={child.key} className='govuk-summary-card__action'>
          {child}
        </li>
      ))}
    </ul>
  )
}
