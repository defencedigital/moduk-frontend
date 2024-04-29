'use client'

import clsx from 'clsx'
import { type ReactNode, type ReactPortal, useContext } from 'react'
import { AccordionContext } from './AccordionContext'
import { AccordionItemIndexContext } from './AccordionItemIndexContext'

export interface AccordionItemProps {
  /**
   * Content for the section.
   */
  children: Exclude<ReactNode, ReactPortal | null | undefined>
  /**
   * Whether this section is expanded.
   */
  expanded?: boolean
  /**
   * Heading for the section.
   */
  heading: Exclude<ReactNode, ReactPortal | null | undefined>
  /**
   * Summary line content.
   */
  summary?: Exclude<ReactNode, ReactPortal>
}

/**
 * An accordion section.
 *
 * @experimental React components are in alpha and subject to change.
 */
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
      >
        {typeof children === 'string' && <p className='govuk-body'>{children}</p>}
        {typeof children !== 'string' && children}
      </div>
    </div>
  )
}
