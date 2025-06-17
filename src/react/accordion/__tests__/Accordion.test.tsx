import { render, waitFor } from '@testing-library/react'
import { beforeAll, describe, expect, test } from 'vitest'

import { Accordion, AccordionItem } from '..'

describe('Accordion', () => {
  beforeAll(() => {
    // 'govuk-frontend-supported' not included in <body> by default since Node.js environments do not natively support HTMLScriptElement
    document.body.className += ' govuk-frontend-supported'
  })
  test('does not remount when there are no changes', async () => {
    const { container, rerender, getByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    // Wait for the GOV.UK JS to run
    await waitFor(() => {
      expect(getByText('Show all sections')).toBeInTheDocument()
    })

    const previousElement = container.firstElementChild

    rerender(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    expect(container.firstElementChild).toBeTruthy()
    expect(container.firstElementChild).toBe(previousElement)
  })

  test('rerenders when the show all sections text is changed', async () => {
    const { rerender, getByText, queryByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    // Wait for the GOV.UK JS to run
    await waitFor(() => {
      expect(getByText('Show all sections')).toBeInTheDocument()
    })

    rerender(
      <Accordion id='accordion-default' showAllSectionsText='Changed text'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    await waitFor(() => {
      expect(getByText('Changed text')).toBeInTheDocument()
      expect(queryByText('Show all sections')).not.toBeInTheDocument()
    })
  })

  test('rerenders when a heading is changed', async () => {
    const { rerender, getByText, queryByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    // Wait for the GOV.UK JS to run
    await waitFor(() => {
      expect(getByText('Show all sections')).toBeInTheDocument()
    })

    rerender(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Updated heading'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    expect(queryByText('Writing well for the web')).not.toBeInTheDocument()
    expect(getByText('Updated heading')).toBeInTheDocument()
  })

  test('rerenders when a heading is changed in a deeply nested fragment', async () => {
    const { rerender, getByText, queryByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for specialists'>
          <p className='govuk-body'>This is the content for Writing well for specialists.</p>
        </AccordionItem>
        <AccordionItem heading='Writing well for specialists'>
          <p className='govuk-body'>This is the content for Writing well for specialists.</p>
        </AccordionItem>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    // Wait for the GOV.UK JS to run
    await waitFor(() => {
      expect(getByText('Show all sections')).toBeInTheDocument()
    })

    rerender(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for specialists'>
          <p className='govuk-body'>This is the content for Writing well for specialists.</p>
        </AccordionItem>
        <AccordionItem heading='Writing well for specialists'>
          <p className='govuk-body'>This is the content for Writing well for specialists.</p>
        </AccordionItem>
        <AccordionItem heading='Updated heading'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    expect(queryByText('Writing well for the web')).not.toBeInTheDocument()
    expect(getByText('Updated heading')).toBeInTheDocument()
  })

  test('updates when the child of an item is changed', async () => {
    const { rerender, getByText, queryByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
      </Accordion>,
    )

    // Wait for the GOV.UK JS to run
    await waitFor(() => {
      expect(getByText('Show all sections')).toBeInTheDocument()
    })

    rerender(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>Updated text.</p>
        </AccordionItem>
      </Accordion>,
    )

    expect(queryByText('This is the content for Writing well for the web.')).not.toBeInTheDocument()
    expect(getByText('Updated text.')).toBeInTheDocument()
  })

  test('generates correct IDs for items nested in a fragment', async () => {
    const { getByText } = render(
      <Accordion id='accordion-default'>
        <AccordionItem heading='Writing well for the web'>
          <p className='govuk-body'>This is the content for Writing well for the web.</p>
        </AccordionItem>
        <>
          <AccordionItem heading='Writing well for specialists'>
            <p className='govuk-body'>This is the content for Writing well for specialists.</p>
          </AccordionItem>
          <AccordionItem heading='Know your audience'>
            <p className='govuk-body'>This is the content for Know your audience.</p>
          </AccordionItem>
        </>
      </Accordion>,
    )

    expect(getByText('Know your audience')).toHaveAttribute('id', 'accordion-default-heading-3')
  })
})
