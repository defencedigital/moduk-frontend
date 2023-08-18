import clsx from 'clsx'
import { Children, type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'
import { mergeRefs } from 'react-merge-refs'

import MODUKHeaderLogo from '../../assets/svg/moduk-header-logo.svg'
import { useMODUKComponent } from '../internal/hooks/useMODUKComponent'

interface HeaderContentProps {
  serviceName?: string
  serviceUrl?: string
  menuButtonLabel?: string
  menuButtonText?: string
  children?: ReactNode
  navigationClassName?: string
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
 * @experimental React components are in alpha and subject to change.
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
