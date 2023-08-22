import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactElement } from 'react'
import type { FooterMetaProps } from './FooterMeta'
import type { FooterNavigationProps } from './FooterNavigation'

function OpenGovernmentLicenceContent() {
  return (
    <>
      {'All content is available under the '}
      <a
        className='govuk-footer__link'
        href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
        rel='license'
      >
        Open Government Licence v3.0
      </a>, except where otherwise stated
    </>
  )
}

interface FooterMetaWrapperProps {
  children?: ReactElement<FooterMetaProps>
  contentLicence?: ReactElement | string
  copyright?: ReactElement | string
}

function FooterMetaWrapper(
  { children, contentLicence, copyright }: FooterMetaWrapperProps,
) {
  return (
    <div className='govuk-footer__meta'>
      <div className='govuk-footer__meta-item govuk-footer__meta-item--grow'>
        {children}
        <svg
          aria-hidden='true'
          focusable='false'
          className='govuk-footer__licence-logo'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 483.2 195.7'
          height='17'
          width='41'
        >
          <path
            fill='currentColor'
            d='M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145'
          />
        </svg>{' '}
        <span className='govuk-footer__licence-description'>
          {contentLicence}
        </span>
      </div>
      <div className='govuk-footer__meta-item'>
        <a
          className='govuk-footer__link govuk-footer__copyright-logo'
          href='https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/'
        >
          {copyright}
        </a>
      </div>
    </div>
  )
}

interface FooterProps extends ComponentPropsWithoutRef<'footer'> {
  /**
   * Classes that can be added to the inner container, useful if you want to make the footer full width.
   */
  containerClassName?: string
  /**
   * The content licence text.
   */
  contentLicence?: ReactElement | string
  /**
   * The copyright text.
   */
  copyright?: ReactElement | string
  /**
   * Meta navigation. An instance of FooterMeta.
   */
  meta?: ReactElement<FooterMetaProps>
  /**
   * Secondary navigation. An instance of FooterNavigation.
   */
  navigation?: ReactElement<FooterNavigationProps>
}

/**
 * A page footer.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Footer
 *   meta={
 *     <FooterMeta>
 *       <FooterMetaLink href='#1'>Item 1</FooterMetaLink>
 *       <FooterMetaLink href='#2'>Item 2</FooterMetaLink>
 *       <FooterMetaLink href='#2'>Item 3</FooterMetaLink>
 *     </FooterMeta>
 *   }
 * />
 */
export const Footer = forwardRef<
  HTMLElement,
  FooterProps
>((
  {
    className,
    containerClassName,
    contentLicence = OpenGovernmentLicenceContent(),
    copyright = '© Crown copyright',
    meta,
    navigation,
    ...rootProps
  },
  ref,
) => (
  <footer ref={ref} className={clsx('govuk-footer', className)} role='contentinfo' {...rootProps}>
    <div className={clsx('govuk-width-container', containerClassName)}>
      {navigation}
      <FooterMetaWrapper contentLicence={contentLicence} copyright={copyright}>
        {meta}
      </FooterMetaWrapper>
    </div>
  </footer>
))

Footer.displayName = 'Footer'
