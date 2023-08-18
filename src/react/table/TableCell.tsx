import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {
  format?: 'numeric'
}

/**
 * A table cell.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((
  { children, className, format, ...rest },
  ref,
) => (
  <td
    ref={ref}
    className={clsx('govuk-table__cell', format && `govuk-table__cell--${format}`, className)}
    {...rest}
  >
    {children}
  </td>
))

TableCell.displayName = 'TableCell'
