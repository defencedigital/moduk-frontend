'use client'

import clsx from 'clsx'
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'

/**
 * Replacement for <body> tag when using React to render the
 * entire page.
 *
 * This handles adding the `js-enabled` CSS class to the body
 * element when JavaScript is available, ensuring interactive
 * components are styled correctly.
 *
 * @experimental React components are in alpha and subject to change.
 */
export const MODUKBody = ({ children, className, ...rest }: ComponentPropsWithoutRef<'body'>) => {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])

  const combinedClassName = clsx(
    {
      'js-enabled': isClient,
      'govuk-frontend-supported': isClient && 'noModule' in HTMLScriptElement.prototype,
    },
    'govuk-template__body',
    className,
  )

  return (
    <body
      className={combinedClassName}
      {...rest}
    >
      {children}
    </body>
  )
}
