import clsx from 'clsx'
import { forwardRef } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'
import type { PermissiveChild } from '../internal/PermissiveChild'

interface BackLinkProps {
  children: PermissiveChild
  className?: string
}

/**
 * @experimental React components are in alpha and subject to change.
 */
export const BackLink: LinkComponent<BackLinkProps> = forwardRef<HTMLAnchorElement, BackLinkProps>((
  { children, className, ...props },
  forwardedRef,
) => <LinkBase ref={forwardedRef} className={clsx('govuk-back-link', className)} {...props}>{children}</LinkBase>)

BackLink.displayName = 'BackLink'
