import clsx from 'clsx'
import { Children, type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'
import { mergeRefs } from 'react-merge-refs'

import MODUKHeaderLogo from '../../assets/svg/moduk-header-logo.svg'
import { useMODUKComponent } from '../internal/hooks/useMODUKComponent'

interface HeaderContentProps {
  /**
   * The name of your service, included in the header.
   */
  serviceName?: string
  /**
   * URL for the service name anchor.
   */
  serviceUrl?: string
  /**
   * Text for the aria-label attribute of the button that
   * opens the mobile navigation, if there is a mobile
   * navigation menu. Defaults to 'Show or hide menu'.
   */
  menuButtonLabel?: string
  /**
   * Text of the button that opens the mobile navigation
   * menu, if there is a mobile navigation menu. There is
   * no enforced character limit, but there is a limited
   * display space so keep text as short as possible. By
   * default, this is set to 'Menu'.
   */
  menuButtonText?: string
  /**
   * Optional instances of HeaderNavigationItem.
   */
  children?: ReactNode
  /**
   * CSS classes for the navigation section of the header.
   */
  navigationClassName?: string
  /**
   * Text for the aria-label attribute of the navigation.
   * Defaults to the same value as menuButtonText.
   */
  navigationLabel?: string
}

export interface HeaderProps extends HeaderContentProps, ComponentPropsWithoutRef<'header'> {
  homepageUrl?: string
  containerClassName?: string
}

function HeaderContent(props: HeaderContentProps) {
  const {
    children,
    serviceName,
    serviceUrl,
    navigationLabel,
    menuButtonLabel,
    navigationClassName,
    menuButtonText = 'Menu',
  } = props

  const hasNav = Boolean(Children.count(children))
  if (!serviceName && !hasNav) {
    return null
  }

  const isLink = Boolean(serviceName && serviceUrl)
  const HeaderTag = isLink ? 'a' : 'span'

  return (
    <div className='govuk-header__content'>
      {serviceName && (
        <HeaderTag
          {...(isLink ? { href: serviceUrl } : {})}
          className={clsx(isLink && 'govuk-header__link', 'moduk-header__service-name govuk-header__service-name')}
        >
          {serviceName}
        </HeaderTag>
      )}
      {hasNav && (
        <nav
          aria-label={navigationLabel || menuButtonText}
          className={clsx('govuk-header__navigation', navigationClassName)}
        >
          <button
            type='button'
            className='govuk-header__menu-button govuk-js-header-toggle'
            aria-controls='navigation'
            aria-label={menuButtonLabel || 'Show or hide menu'}
            hidden
          >
            {menuButtonText}
          </button>

          <ul id='navigation' className='govuk-header__navigation-list'>
            {children}
          </ul>
        </nav>
      )}
    </div>
  )
}

/**
 * Header.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Header homepageUrl='#' serviceName='Service name' serviceUrl='#' />
 *
 * @example
 * <Header
 *   homepageUrl='#'
 *   serviceName='Service name'
 *   serviceUrl='#'
 * >
 *   <HeaderNavigationItem active>
 *     <HeaderNavigationLink href='#1'>Navigation item 1</HeaderNavigationLink>
 *   </HeaderNavigationItem>
 *   <HeaderNavigationItem>
 *     <HeaderNavigationLink href='#2'>Navigation item 2</HeaderNavigationLink>
 *   </HeaderNavigationItem>
 *   <HeaderNavigationItem>
 *     <HeaderNavigationLink href='#3'>Navigation item 3</HeaderNavigationLink>
 *   </HeaderNavigationItem>
 *   <HeaderNavigationItem>
 *     <HeaderNavigationLink href='#4'>Navigation item 4</HeaderNavigationLink>
 *   </HeaderNavigationItem>
 * </Header>
 */
export const Header = forwardRef<HTMLElement, HeaderProps>((props, forwardedRef) => {
  const { ref } = useMODUKComponent('Header')

  const {
    children,
    className,
    containerClassName,
    homepageUrl,
    menuButtonLabel,
    menuButtonText = 'Menu',
    navigationClassName,
    navigationLabel,
    serviceName,
    serviceUrl,
    ...rootProps
  } = props

  const headerContentProps = {
    menuButtonLabel,
    menuButtonText,
    navigationClassName,
    navigationLabel,
    serviceName,
    serviceUrl,
  }

  return (
    <header
      ref={mergeRefs([ref, forwardedRef])}
      className={clsx('govuk-header', className)}
      role='banner'
      data-module='govuk-header'
      {...rootProps}
    >
      <div className={clsx('govuk-header__container', containerClassName || 'govuk-width-container')}>
        <div className='moduk-header__logo govuk-header__logo'>
          <a href={homepageUrl || '/'} className='govuk-header__link govuk-header__link--homepage' title='Home'>
            <span className='govuk-header__logotype'>
              <MODUKHeaderLogo />
            </span>
          </a>
        </div>
        <HeaderContent {...headerContentProps}>{children}</HeaderContent>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
