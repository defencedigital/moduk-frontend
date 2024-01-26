import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactElement, type ReactNode } from 'react'
import type { PhaseTagProps } from './PhaseTag'

export interface PhaseBannerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Main content for the phase banner.
   */
  children: ReactNode
  /**
   * An instance of PhaseTag.
   *
   * @example
   * <PhaseTag>alpha</PhaseTag>
   */
  phaseTag: ReactElement<PhaseTagProps>
}

/**
 * A phase banner.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <PhaseBanner phaseTag={<PhaseTag>Alpha</PhaseTag>}>
 *   This is a new service – your <a className='govuk-link' href='#'>feedback</a> will help us to improve it.
 * </PhaseBanner>
 */
export const PhaseBanner = forwardRef<HTMLDivElement, PhaseBannerProps>(
  (
    { children, className, phaseTag, ...rest },
    ref,
  ) => (
    <div ref={ref} className={clsx('govuk-phase-banner', className)} {...rest}>
      <p className='govuk-phase-banner__content'>
        {phaseTag}
        <span className='govuk-phase-banner__text'>
          {children}
        </span>
      </p>
    </div>
  ),
)

PhaseBanner.displayName = 'PhaseBanner'
