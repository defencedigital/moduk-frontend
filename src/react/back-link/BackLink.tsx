import clsx from 'clsx'
import type { ReactElement } from 'react'
import { forwardRef } from 'react'
import { LinkBase, type LinkComponent } from '../internal/Link/Link'

type BackLinkChild = ReactElement | boolean | null | Iterable<BackLinkChild>

interface BackLinkProps {
  children: BackLinkChild
  className?: string
}

export const BackLink: LinkComponent<BackLinkProps> = forwardRef<HTMLAnchorElement, BackLinkProps>((
  { children, className, ...props },
  forwardedRef,
) => <LinkBase ref={forwardedRef} className={clsx('govuk-back-link', className)} {...props}>{children}</LinkBase>)

BackLink.displayName = 'BackLink'
