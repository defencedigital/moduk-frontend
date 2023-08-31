import clsx from 'clsx'
import {
  Children,
  type ComponentPropsWithoutRef,
  type FocusEventHandler,
  forwardRef,
  isValidElement,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react'
import { mergeRefs } from 'react-merge-refs'

interface NotificationBannerTitleProps {
  children: ReactNode
  headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  id: string
}

const NotificationBannerTitle = ({ children, headingTag: Heading, id }: NotificationBannerTitleProps) => (
  <Heading className={clsx('govuk-notification-banner__title')} id={id}>{children}</Heading>
)

export interface NotificationBannerProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  /**
   * The content for the notification banner.
   *
   * If `children` is a string, the text is automatically wrapped
   * in a `<p className='govuk-notification-banner__heading'>`
   * element.
   *
   * If `children` contains React elements, you should use
   * the `govuk-notification-banner__heading` class with <p> or
   * heading tags such as <h3>. Some examples of this are provided.
   */
  children: ReactNode
  /**
   * Whether to disable automatic focusing of the notification
   * banner when type is `success` or role is otherwise `alert`.
   */
  disableAutoFocus?: boolean
  /**
   * Overrides the value of the role attribute for the
   * notification banner. Defaults to `region`. If you set
   * type to `success`, role defaults to `alert`.
   */
  role?: ComponentPropsWithoutRef<'div'>['role']
  /**
   * The title for the banner. By default, this is "Important"
   * when type is unset, and "Success" when type is `success`.
   */
  title?: ReactNode
  /**
   * HTML heading tag to use for the title.
   */
  titleHeadingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * A custom ID for the title.
   */
  titleId?: string
  /**
   * The type of notification to render. You can use only the
   * success or null values with this option. If you set type
   * to success, the notification banner sets role to alert.
   * JavaScript then moves the keyboard focus to the notification
   * banner when the page loads. If you do not set type, the
   * notification banner sets role to region.
   */
  type?: 'success'
}

/**
 * Notification banner.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <NotificationBanner>
 *   There may be a delay in processing your application because of the coronavirus outbreak.
 * </NotificationBanner>
 *
 * @example
 * <NotificationBanner type='success'>
 *   <h3 className='govuk-notification-banner__heading'>
 *     Training outcome recorded and trainee withdrawn
 *   </h3>
 *   <p className='govuk-body'>
 *     Contact <a className='govuk-notification-banner__link' href='#'>example@department.gov.uk</a>
 *     {' if you think there’s a problem.'}
 *   </p>
 * </NotificationBanner>
 */
export const NotificationBanner = forwardRef<HTMLDivElement, NotificationBannerProps>((
  { children, disableAutoFocus, onBlur, role, title, titleHeadingTag = 'h2', titleId, type, ...rest },
  forwardedRef,
) => {
  const autoTitleId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  const resolvedTitleId = titleId || autoTitleId
  const isSuccess = type === 'success'
  const computedRole = role ?? (isSuccess ? 'alert' : 'region')
  const computedTitle = title ?? (isSuccess ? 'Success' : 'Important')
  const hasSimpleChildren = !Children.toArray(children).every(isValidElement)

  const content = hasSimpleChildren
    ? <p className='govuk-notification-banner__heading'>{children}</p>
    : children

  const handleBlur: FocusEventHandler<HTMLDivElement> = useCallback((event) => {
    ref.current?.removeAttribute('tabindex')
    onBlur?.(event)
  }, [onBlur])

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const previousIsFirstRender = isFirstRender.current
    isFirstRender.current = false

    if (!previousIsFirstRender || disableAutoFocus || computedRole !== 'alert') {
      return
    }

    if (!ref.current.getAttribute('tabindex')) {
      ref.current.setAttribute('tabindex', '-1')
    }

    ref.current.focus()
  }, [computedRole, disableAutoFocus])

  return (
    <div
      ref={mergeRefs([ref, forwardedRef])}
      aria-labelledby={resolvedTitleId}
      className={clsx('govuk-notification-banner', isSuccess && 'govuk-notification-banner--success')}
      onBlur={handleBlur}
      role={computedRole}
      {...rest}
    >
      <div className='govuk-notification-banner__header'>
        <NotificationBannerTitle id={resolvedTitleId} headingTag={titleHeadingTag}>
          {computedTitle}
        </NotificationBannerTitle>
      </div>
      <div className='govuk-notification-banner__content'>
        {content}
      </div>
    </div>
  )
})

NotificationBanner.displayName = 'NotificationBanner'
