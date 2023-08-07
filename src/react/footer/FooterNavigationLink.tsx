import clsx from 'clsx'
import { forwardRef } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'
import type { PermissiveChild } from '../internal/PermissiveChild'

interface FooterLinkProps {
  children: PermissiveChild
  className?: string
}

/**
 * Link within a FooterNavigationSection.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const FooterNavigationLink: LinkComponent<FooterLinkProps> = forwardRef<HTMLAnchorElement, FooterLinkProps>((
  { children, className, ...props },
  forwardedRef,
) => (
  <li className='govuk-footer__list-item'>
    <LinkBase ref={forwardedRef} className={clsx('govuk-footer__link', className)} {...props}>{children}</LinkBase>
  </li>
))

FooterNavigationLink.displayName = 'FooterNavigationLink'
