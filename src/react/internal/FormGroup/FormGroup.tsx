import clsx from 'clsx'
import { type ReactNode, useMemo } from 'react'
import { FormGroupContext } from './FormGroupContext'

interface FormGroupProps {
  children: ReactNode
  className: string
  id: string
}

export function FormGroup({ children, className, id }: FormGroupProps) {
  const contextValue = useMemo(() => ({ id }), [id])

  return (
    <FormGroupContext.Provider value={contextValue}>
      <div className={clsx('govuk-form-group', className)}>{children}</div>
    </FormGroupContext.Provider>
  )
}
