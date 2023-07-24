import { Accordion, AccordionItem } from '@moduk/frontend/react'

export const Example = () => (
  <Accordion id='accordion-default'>
    <AccordionItem heading='Writing well for the web' expanded>
      This is the content for Writing well for the web.
    </AccordionItem>
    <AccordionItem heading='Writing well for specialists' expanded>
      This is the content for Writing well for specialists.
    </AccordionItem>
    <AccordionItem heading='Know your audience'>
      This is the content for Know your audience.
    </AccordionItem>
    <AccordionItem heading='How people read'>
      This is the content for How people read.
    </AccordionItem>
  </Accordion>
)
