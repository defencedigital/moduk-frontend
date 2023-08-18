import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>

/**
 * A table body.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((
  { children, className, ...rest },
  ref,
) => (
  <tbody ref={ref} className={clsx('govuk-table__body', className)} {...rest}>
    {children}
  </tbody>
))

TableBody.displayName = 'TableBody'
