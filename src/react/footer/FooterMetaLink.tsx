import clsx from 'clsx'
import { forwardRef } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'
import type { PermissiveChild } from '../internal/PermissiveChild'

interface FooterMetaLinkProps {
  children: PermissiveChild
  className?: string
}

/**
 * A list of links within a FooterMeta.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const FooterMetaLink: LinkComponent<FooterMetaLinkProps> = forwardRef<HTMLAnchorElement, FooterMetaLinkProps>((
  { children, className, ...props },
  forwardedRef,
) => (
  <>
    <li className='govuk-footer__inline-list-item'>
      <LinkBase ref={forwardedRef} className={clsx('govuk-footer__link', className)} {...props}>{children}</LinkBase>
    </li>
    {' '}
  </>
))

FooterMetaLink.displayName = 'FooterLink'
