import { Accordion, AccordionItem } from '@moduk/frontend/react'

export const Example = () => (
  <Accordion id='accordion-with-summary-sections'>
    <AccordionItem
      heading='Understanding agile project management'
      summary='Introductions, methods, core features.'
    >
      <ul className='govuk-list'>
        <li>
          <a className='govuk-link' href='#'>Agile and government services: an introduction</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Agile methods: an introduction</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Core principles of agile</a>
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem
      heading='Working with agile methods'
      summary='Workspaces, tools and techniques, user stories, planning.'
    >
      <ul className='govuk-list'>
        <li>
          <a className='govuk-link' href='#'>Creating an agile working environment</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Agile tools and techniques</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Set up a team wall</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Writing user stories</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Planning in agile</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Deciding on priorities</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Developing a roadmap</a>
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem
      heading='Governing agile services'
      summary='Principles, measuring progress, spending money.'
    >
      <ul className='govuk-list'>
        <li>
          <a className='govuk-link' href='#'>Governance principles for agile service delivery</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Measuring and reporting progress</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Spend controls: check if you need approval to spend money on a service</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Spend controls: apply for approval to spend money on a service</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Spend controls: the new pipeline process</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Working across organisational boundaries</a>
        </li>
      </ul>
    </AccordionItem>
    <AccordionItem
      heading='Phases of an agile project'
      summary='Discovery, alpha, beta, live and retirement.'
    >
      <ul className='govuk-list'>
        <li>
          <a className='govuk-link' href='#'>How the discovery phase works</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>How the alpha phase works</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>How the beta phase works</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>How the live phase works</a>
        </li>
        <li>
          <a className='govuk-link' href='#'>Retiring your service</a>
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
)
