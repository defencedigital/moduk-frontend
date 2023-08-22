import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type VisuallyHiddenTextProps = ComponentPropsWithoutRef<'span'>

/**
 * A <span> containing visually hidden text
 *
 * @experimental React components are in alpha and subject to change.
 */
export const VisuallyHiddenText = ({ children, className }: VisuallyHiddenTextProps) => (
  <span className={clsx('govuk-visually-hidden', className)}>{children}</span>
)
