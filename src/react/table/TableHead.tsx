import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type TableHeadProps = ComponentPropsWithoutRef<'thead'>

/**
 * A table head.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((
  { children, className, ...rest },
  ref,
) => (
  <thead ref={ref} className={clsx('govuk-table__head', className)} {...rest}>
    {children}
  </thead>
))

TableHead.displayName = 'TableHead'
