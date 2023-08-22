import clsx from 'clsx'
import type { ComponentProps } from 'react'
import type { PermissiveChild } from '../internal/PermissiveChild'
import type { FooterNavigationLink } from './FooterNavigationLink'

export interface FooterNavigationSectionProps {
  /**
   * Links to display. Instances of FooterNavigationLink.
   */
  children: PermissiveChild<ComponentProps<typeof FooterNavigationLink>>
  /**
   * Amount of columns to display items in.
   */
  columns?: number
  /**
   *  Title for the section.
   */
  title: string
  /**
   * Width of this navigation section. Defaults to full width.
   * You can pass any design system grid width here, for example,
   * 'one-third'; 'two-thirds'; 'one-half'.
   */
  width?: string
}

/**
 * A list of secondary navigation links within a FooterNavigation.
 *
 * @experimental React components are in alpha and subject to change.
 */
export function FooterNavigationSection({ title, width = 'full', columns, children }: FooterNavigationSectionProps) {
  return (
    <div
      className={clsx(
        'govuk-footer__section',
        `govuk-grid-column-${width}`,
      )}
    >
      <h2 className='govuk-footer__heading govuk-heading-m'>{title}</h2>
      <ul className={clsx('govuk-footer__list', columns && `govuk-footer__list--columns-${columns}`)}>
        {children}
      </ul>
    </div>
  )
}
