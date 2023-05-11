import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { MODlogo } from './MODlogo'

interface NavigationOptions {
  key?: string
  content?: ReactNode | string
  href?: string
  active?: boolean
  attributes?: Omit<JSX.IntrinsicElements['a'], 'href'>
}

interface HeaderContentProps {
  serviceName?: string
  serviceUrl?: string
  menuButtonLabel?: string
  menuButtonText?: string
  navigation?: NavigationOptions[]
  navigationClasses?: string
  navigationLabel?: string
}

interface HeaderProps extends HeaderContentProps {
  homepageUrl?: string
  assetsPath?: string
  productName?: string
  containerClasses?: string
  classes?: string
  extraProps?: JSX.IntrinsicElements['header']
}

function HeaderContent(props: HeaderContentProps) {
  const {
    navigation,
    serviceName,
    serviceUrl,
    navigationLabel,
    menuButtonLabel,
    navigationClasses,
    menuButtonText = 'Menu',
  } = props

  const hasNavigation = Boolean(props.navigation?.length)

  if (!hasNavigation && !serviceName) {
    return null
  }

  const isLink = Boolean(serviceName && serviceUrl)

  return (
    <div className='govuk-header__content'>
      {isLink && (
        <a href={serviceUrl} className='govuk-header__link moduk-header__service-name govuk-header__service-name'>
          {serviceName}
        </a>
      )}
      {(!isLink && serviceName) && (
        <span className='moduk-header__service-name govuk-header__service-name'>{serviceName}</span>
      )}

      {hasNavigation && (
        <nav
          aria-label={navigationLabel || menuButtonText}
          className={clsx('govuk-header__navigation', navigationClasses)}
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
            {navigation?.map(({ attributes, href, content, active, key }) => (
              <li
                key={key}
                className={clsx(
                  'govuk-header__navigation-item',
                  active && 'govuk-header__navigation-item--active moduk-header__navigation-item--active',
                )}
              >
                {typeof content === 'string'
                  ? (
                    <a className='govuk-header__link' href={href} {...attributes}>
                      {content}
                    </a>
                  )
                  : content}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

function Header(props: HeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const previousRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Initialise the component if and only if the DOM element has changed
    if (ref.current && ref.current !== previousRef.current) {
      const client = require('@moduk/frontend/client')

      new client.Header(ref.current).init()
      previousRef.current = ref.current
    }
  })

  return (
    <header
      ref={ref}
      className={clsx('govuk-header', props.classes)}
      role='banner'
      data-module='govuk-header'
      {...props.extraProps}
    >
      <div className={clsx('govuk-header__container', props.containerClasses || 'govuk-width-container')}>
        <div className='moduk-header__logo govuk-header__logo'>
          <a href={props.homepageUrl || '/'} className='govuk-header__link govuk-header__link--homepage'>
            <span className='govuk-header__logotype'>
              <MODlogo />
            </span>
            {Boolean(props.productName)
              && (
                <span className='govuk-header__product-name'>
                  {props.productName}
                </span>
              )}
          </a>
        </div>
        <HeaderContent {...props} />
      </div>
    </header>
  )
}

export { Header }
