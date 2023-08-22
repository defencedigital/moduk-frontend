import type { ComponentProps, ReactElement } from 'react'
import type { PermissiveChild } from '../internal/PermissiveChild'
import type { FooterMetaLink } from './FooterMetaLink'

export interface FooterMetaProps {
  /**
   * Meta links. An instance of FooterMetaLinks.
   */
  children?: PermissiveChild<ComponentProps<typeof FooterMetaLink>>
  /**
   * Text to add to the meta section of the footer, which will appear below any links specified as children.
   */
  content?: ReactElement | string
  /**
   * Title for a meta item section.
   */
  visuallyHiddenTitle?: string
}

/**
 * Meta section for a footer.
 *
 * @experimental React components are in alpha and subject to change.
 */
export function FooterMeta(
  { children, content, visuallyHiddenTitle = 'Support links' }: FooterMetaProps,
) {
  return (
    <>
      <h2 className='govuk-visually-hidden'>{visuallyHiddenTitle}</h2>
      {children && (
        <ul className='govuk-footer__inline-list'>
          {children}
        </ul>
      )}
      {content && <div className='govuk-footer__meta-custom'>{content}</div>}
    </>
  )
}
