import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type TableCaptionProps = ComponentPropsWithoutRef<'caption'>

/**
 * A table caption. Should be the first child of a Table.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const TableCaption = forwardRef<HTMLElement, TableCaptionProps>((
  { children, className, ...rest },
  ref,
) => (
  <caption ref={ref} className={clsx('govuk-table__caption', className)} {...rest}>
    {children}
  </caption>
))

TableCaption.displayName = 'TableCaption'
