import clsx from 'clsx'
import type { JSX, ReactNode } from 'react'

export interface HeaderNavigationItemProps {
  children: ReactNode
  active?: boolean
}

export function HeaderNavigationItem(
  { active, children, className, ...props }: HeaderNavigationItemProps & JSX.IntrinsicElements['a'],
) {
  return (
    <>
      <li
        className={clsx(
          'govuk-header__navigation-item',
          active && 'govuk-header__navigation-item--active moduk-header__navigation-item--active',
        )}
      >
        {typeof children === 'string'
          ? (
            <a className={clsx('govuk-header__link', className)} {...props}>
              {children}
            </a>
          )
          : children}
      </li>
      {/* Match the whitespace for as the Nunjucks version */ ' '}
    </>
  )
}
