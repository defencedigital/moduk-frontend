import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface DetailsProps extends ComponentPropsWithoutRef<'details'> {
  /**
   * Content to be displayed when the details element is expanded.
   */
  children: ReactNode
  /**
   * Content for the summary element.
   */
  summary: ReactNode
}

/**
 * Details component.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Details summary='Help with organisation'>
 *   We need to know the organisation you work for so we can forward your request to the correct team.
 * </Details>
 */
export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ children, className, summary, ...rest }, ref) => (
    <details ref={ref} className={clsx('govuk-details', className)} {...rest}>
      <summary className='govuk-details__summary'>
        <span className='govuk-details__summary-text'>
          {summary}
        </span>
      </summary>
      <div className='govuk-details__text'>
        {children}
      </div>
    </details>
  ),
)

Details.displayName = 'Details'
