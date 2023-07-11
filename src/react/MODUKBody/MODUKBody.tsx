'use client'

import clsx from 'clsx'
import { type JSX, useEffect, useState } from 'react'

export const MODUKBody = ({ children, className, ...rest }: JSX.IntrinsicElements['body']) => {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  // logical OR is in place to prevent empty class attribute
  return <body className={clsx(isClient && 'js-enabled', className) || undefined} {...rest}>{children}</body>
}
