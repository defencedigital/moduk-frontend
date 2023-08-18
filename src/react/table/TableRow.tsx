import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type TableRowProps = ComponentPropsWithoutRef<'tr'>

/**
 * A table row. Should be contained within a TableHead or a TableBody.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((
  { children, className, ...rest },
  ref,
) => (
  <tr ref={ref} className={clsx('govuk-table__row', className)} {...rest}>
    {children}
  </tr>
))

TableRow.displayName = 'TableRow'
