import { createContext } from 'react'

export interface FormGroupContextProps {
  id: string
}

export const FormGroupContext = createContext<FormGroupContextProps>({ id: '' })
