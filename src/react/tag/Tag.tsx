import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

export interface TagProps extends ComponentPropsWithoutRef<'strong'> {
  children: ReactNode
}

/**
 * A tag, used to show users the status of something.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Tag>Completed</Tag>
 *
 * @example
 * <Tag className='govuk-tag--green'>New</Tag>
 */
export const Tag = forwardRef<HTMLElement, TagProps>(({ children, className, ...rest }, ref) => {
  const isTagVariant = (className ?? '').split(' ').some((value) => value.trimStart().startsWith('govuk-tag--'))
  return (
    <strong ref={ref} className={clsx('govuk-tag', className, !isTagVariant && 'moduk-tag--default')} {...rest}>
      {children}
    </strong>
  )
})

Tag.displayName = 'Tag'
