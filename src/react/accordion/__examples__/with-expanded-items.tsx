import { Accordion, AccordionItem } from '@moduk/frontend/react'

export const Example = () => (
  <Accordion id='accordion-with-expanded-item'>
    <AccordionItem heading='Writing well for the web' expanded>
      <p className='govuk-body'>This is the content for Writing well for the web.</p>
    </AccordionItem>
    <AccordionItem heading='Writing well for specialists' expanded>
      <p className='govuk-body'>This is the content for Writing well for specialists.</p>
    </AccordionItem>
    <AccordionItem heading='Know your audience'>
      <p className='govuk-body'>This is the content for Know your audience.</p>
    </AccordionItem>
    <AccordionItem heading='How people read'>
      <p className='govuk-body'>This is the content for How people read.</p>
    </AccordionItem>
  </Accordion>
)
