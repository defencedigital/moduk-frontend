'use client'

import clsx from 'clsx'
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'

/**
 * @experimental React components are in alpha and subject to change.
 */
export const MODUKBody = ({ children, className, ...rest }: ComponentPropsWithoutRef<'body'>) => {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  // logical OR is in place to prevent empty class attribute
  return <body className={clsx(isClient && 'js-enabled', className) || undefined} {...rest}>{children}</body>
}
