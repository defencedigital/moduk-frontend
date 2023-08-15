import clsx from 'clsx'
import { forwardRef, type ReactNode } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'

export interface HeaderNavigationLinkProps {
  children: ReactNode
  className?: string
}

export const HeaderNavigationLink: LinkComponent<HeaderNavigationLinkProps> = forwardRef<
  HTMLAnchorElement,
  HeaderNavigationLinkProps
>((
  { children, className, ...props },
  ref,
) => (
  <LinkBase ref={ref} className={clsx('govuk-header__link', className)} {...props}>
    {children}
  </LinkBase>
))

HeaderNavigationLink.displayName = 'HeaderNavigationLink'