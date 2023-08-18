import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export interface TableColumnHeaderCellProps extends Omit<ComponentPropsWithoutRef<'th'>, 'scope'> {
  format?: 'numeric'
}

/**
 * A header for a column. Should be used for cells inside a row of a TableHead.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableColumnHeader = forwardRef<HTMLTableHeaderCellElement, TableColumnHeaderCellProps>((
  { children, className, format, ...rest },
  ref,
) => (
  <th
    ref={ref}
    scope='col'
    className={clsx('govuk-table__header', format && `govuk-table__header--${format}`, className)}
    {...rest}
  >
    {children}
  </th>
))

TableColumnHeader.displayName = 'TableColumnHeader'
