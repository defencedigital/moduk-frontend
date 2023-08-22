import clsx from 'clsx'
import { isValidElement } from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import { type PermissiveChild } from '../internal/PermissiveChild'
import { type SummaryListActionLinkProps } from './SummaryListActionLink'

export interface SummaryListActionsProps {
  /**
   * Instances of SummaryListActionLink.
   */
  children: PermissiveChild<SummaryListActionLinkProps>
  className?: string
}

/**
 * Actions for a summary list row.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryListActions = ({ children, className }: SummaryListActionsProps) => {
  const flattenedChildren = flattenChildren(children).filter(isValidElement)

  const links = flattenedChildren.length === 1 ? flattenedChildren : (
    <ul className='govuk-summary-list__actions-list'>
      {flattenedChildren.map((child) => (
        <li
          key={child.key}
          className='govuk-summary-list__actions-list-item'
        >
          {child}
        </li>
      ))}
    </ul>
  )

  return (
    <dd className={clsx('govuk-summary-list__actions', className)}>
      {links}
    </dd>
  )
}
