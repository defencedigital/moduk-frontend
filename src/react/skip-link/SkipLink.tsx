import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useMODUKComponent } from '../internal/hooks/useMODUKComponent'

export interface SkipLinkProps extends ComponentPropsWithoutRef<'a'> {
  /**
   * The value of the skip link’s href attribute.
   * Defaults to #content.
   */
  href?: string
}

/**
 * Skip link.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <SkipLink href='#content'>Skip to main content</SkipLink>
 */
export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ children, className = '#content', ...rest }, forwardedRef) => {
    const { ref } = useMODUKComponent('SkipLink')

    return (
      <a
        ref={mergeRefs([ref, forwardedRef])}
        className={clsx('govuk-skip-link', className)}
        data-module='govuk-skip-link'
        {...rest}
      >
        {children}
      </a>
    )
  },
)

SkipLink.displayName = 'SkipLink'
