import type { PermissiveChild } from '../internal/PermissiveChild'
import type { FooterNavigationSectionProps } from './FooterNavigationSection'

export interface FooterNavigationProps {
  /**
   * One or more instances of FooterNavigationSection.
   */
  children: PermissiveChild<FooterNavigationSectionProps>
}

/**
 * Secondary navigation for a footer.
 *
 * @experimental React components are in alpha and subject to change.
 */
export function FooterNavigation({ children }: FooterNavigationProps) {
  return (
    <>
      <div className='govuk-footer__navigation'>
        {children}
      </div>
      <hr className='govuk-footer__section-break' />
    </>
  )
}
