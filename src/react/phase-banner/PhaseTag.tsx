import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { Tag } from '../tag'

export type PhaseTagProps = ComponentPropsWithoutRef<typeof Tag>

/**
 * A phase banner tag.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const PhaseTag = forwardRef<HTMLElement, PhaseTagProps>(({ children, className, ...rest }, ref) => (
  <Tag ref={ref} className={clsx('govuk-phase-banner__content__tag', className)} {...rest}>{children}</Tag>
))

PhaseTag.displayName = 'PhaseTag'
