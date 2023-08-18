import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type TableRowHeaderProps = Omit<ComponentPropsWithoutRef<'th'>, 'scope'>

/**
 * A header for a row. Should be used as the first cell of a row when that cell contains a heading.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableRowHeader = forwardRef<HTMLTableHeaderCellElement, TableRowHeaderProps>((
  { children, className, ...rest },
  ref,
) => (
  <th
    ref={ref}
    scope='row'
    className={clsx('govuk-table__header', className)}
    {...rest}
  >
    {children}
  </th>
))

TableRowHeader.displayName = 'TableRowHeader'
