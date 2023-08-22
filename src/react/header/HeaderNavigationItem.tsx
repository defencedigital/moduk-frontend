import clsx from 'clsx'
import { forwardRef, type ReactNode } from 'react'

export interface HeaderNavigationItemProps {
  /**
   * An instance of HeaderNavigationLink.
   */
  children: ReactNode
  className?: string
  /**
   * Whether this navigation item is active.
   */
  active?: boolean
}

/**
 * A header navigation item.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const HeaderNavigationItem = forwardRef<
  HTMLLIElement,
  HeaderNavigationItemProps
>((
  { active, children, className, ...props },
  ref,
) => (
  <>
    <li
      ref={ref}
      className={clsx(
        'govuk-header__navigation-item',
        active && 'govuk-header__navigation-item--active moduk-header__navigation-item--active',
        className,
      )}
      {...props}
    >
      {children}
    </li>
    {/* Match the whitespace for as the Nunjucks version */ ' '}
  </>
))

HeaderNavigationItem.displayName = 'HeaderNavigationItem'
