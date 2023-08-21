import clsx from 'clsx'
import { forwardRef, type ReactNode } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'

export interface SummaryListActionLinkProps {
  children: ReactNode
  className?: string
}

/**
 * @experimental React components are in alpha and subject to change.
 */
export const SummaryListActionLink: LinkComponent<SummaryListActionLinkProps> = forwardRef<
  HTMLAnchorElement,
  SummaryListActionLinkProps
>((
  { children, className, ...props },
  ref,
) => (
  <LinkBase ref={ref} className={clsx('govuk-link', className)} {...props}>
    {children}
  </LinkBase>
))

SummaryListActionLink.displayName = 'SummaryListActionLink'
