import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface TableProps extends Omit<ComponentPropsWithoutRef<'table'>, 'children'> {
  /**
   * Instances of TableCaption, TableHead and TableBody.
   */
  children: ReactNode
}

/**
 * A table.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Table>
 *   <TableCaption className='govuk-table__caption--m'>
 *     Dates and amounts
 *   </TableCaption>
 *   <TableHead>
 *     <TableRow>
 *       <TableColumnHeader>Date</TableColumnHeader>
 *       <TableColumnHeader>Amount</TableColumnHeader>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableRowHeader>First 6 weeks</TableRowHeader>
 *       <TableCell>£109.80 per week</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableRowHeader>Next 33 weeks</TableRowHeader>
 *       <TableCell>£109.80 per week</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableRowHeader>Total estimated pay</TableRowHeader>
 *       <TableCell>£4,282.20</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className }, ref) => (
  <table ref={ref} className={clsx('govuk-table', className)}>{children}</table>
))

Table.displayName = 'Table'
