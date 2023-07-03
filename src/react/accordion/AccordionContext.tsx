import { createContext } from 'react'
import type { AccordionHeadingTag } from './AccordionHeadingTag'

export interface AccordionContextProps {
  headingTag: AccordionHeadingTag
  id: string
}

export const AccordionContext = createContext<AccordionContextProps>({ headingTag: 'h2', id: '' })
