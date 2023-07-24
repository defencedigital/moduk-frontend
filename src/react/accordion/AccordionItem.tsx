'use client'

import clsx from 'clsx'
import type { ReactNode, ReactPortal } from 'react'
import { useContext } from 'react'
import { AccordionContext } from './AccordionContext'
import { AccordionItemIndexContext } from './AccordionItemIndexContext'

export interface AccordionItemProps {
  children: Exclude<ReactNode, ReactPortal | null | undefined>
  expanded?: boolean
  heading: Exclude<ReactNode, ReactPortal | null | undefined>
  summary?: Exclude<ReactNode, ReactPortal>
}

export function AccordionItem({
  children,
  expanded,
  heading,
  summary,
}: AccordionItemProps) {
  const { headingTag: Heading, id } = useContext(AccordionContext)
  const index = useContext(AccordionItemIndexContext)
  const headingId = `${id}-heading-${index + 1}`
  const contentId = `${id}-content-${index + 1}`

  return (
    <div
      className={clsx('govuk-accordion__section', expanded && 'govuk-accordion__section--expanded')}
    >
      <div className='govuk-accordion__section-header'>
        <Heading className='govuk-accordion__section-heading'>
          <span className='govuk-accordion__section-button' id={headingId}>
            {heading}
          </span>
        </Heading>
        {summary
          && (
            <div className='govuk-accordion__section-summary govuk-body'>
              {summary}
            </div>
          )}
      </div>
      <div
        id={contentId}
        className='govuk-accordion__section-content'
        aria-labelledby={headingId}
      >
        {typeof children === 'string' && <p className='govuk-body'>{children}</p>}
        {typeof children !== 'string' && children}
      </div>
    </div>
  )
}
