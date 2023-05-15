import clsx from 'clsx'
import type { JSX, ReactNode } from 'react'

interface BackLinkProps {
  children?: ReactNode
}

export const BackLink = ({ children, className, ...props }: BackLinkProps & JSX.IntrinsicElements['a']) => (
  <a className={clsx('govuk-back-link', className)} {...props}>{children}</a>
)
