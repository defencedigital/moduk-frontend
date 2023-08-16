import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useContext } from 'react'
import { FormGroupContext } from '../internal/FormGroup'

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  children: ReactNode
  /**
   * Whether the label also acts as the heading for the page.
   */
  isPageHeading?: boolean
}

/**
 * Label for a form element.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, htmlFor, id, isPageHeading, ...rest }, ref) => {
    const context = useContext(FormGroupContext)

    const label = (
      <label
        ref={ref}
        className={clsx('govuk-label', className)}
        htmlFor={context.id || htmlFor}
        id={context.id ? `${context.id}-label` : id}
        {...rest}
      >
        {children}
      </label>
    )

    if (isPageHeading) {
      return <h1 className='govuk-label-wrapper'>{label}</h1>
    }

    return label
  },
)

Label.displayName = 'Label'
