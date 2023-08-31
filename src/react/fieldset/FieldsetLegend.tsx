import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface FieldsetLegendProps extends ComponentPropsWithoutRef<'legend'> {
  /**
   * Content for the legend (normally text).
   */
  children: ReactNode
  /**
   * Whether the legend also acts as the heading for the page.
   */
  isPageHeading?: boolean
}

/**
 * Legend for the Fieldset component.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const FieldsetLegend = forwardRef<HTMLLegendElement, FieldsetLegendProps>(
  ({ children, className, isPageHeading, ...rest }, ref) => {
    const contents = isPageHeading ? <h1 className='govuk-fieldset__heading'>{children}</h1> : children

    return (
      <legend ref={ref} className={clsx('govuk-fieldset__legend', className)} {...rest}>
        {contents}
      </legend>
    )
  },
)

FieldsetLegend.displayName = 'FieldsetLegend'
