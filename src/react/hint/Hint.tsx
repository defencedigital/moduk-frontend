import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useContext } from 'react'
import { FormGroupContext } from '../internal/FormGroup'

export interface HintProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

/**
 * Hint for a form element.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const Hint = forwardRef<HTMLDivElement, HintProps>(({ children, className, id, ...rest }, ref) => {
  const context = useContext(FormGroupContext)

  return (
    <div ref={ref} className={clsx('govuk-hint', className)} id={context.id ? `${context.id}-hint` : id} {...rest}>
      {children}
    </div>
  )
})

Hint.displayName = 'Hint'
