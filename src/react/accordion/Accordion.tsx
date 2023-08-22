'use client'

import clsx from 'clsx'
import { isEqual, pick } from 'lodash'
import { Children, type ComponentPropsWithoutRef, forwardRef, isValidElement, useMemo, useRef } from 'react'
import flattenChildren from 'react-keyed-flatten-children'

import { mergeRefs } from 'react-merge-refs'
import { useMODUKComponent } from '../internal/hooks/useMODUKComponent'
import { usePrevious } from '../internal/hooks/usePrevious'
import type { PermissiveChild } from '../internal/PermissiveChild'
import { AccordionContext } from './AccordionContext'
import type { AccordionHeadingTag } from './AccordionHeadingTag'
import type { AccordionItemProps } from './AccordionItem'
import { AccordionItemIndexContext } from './AccordionItemIndexContext'

export interface AccordionProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Instances of AccordionItem.
   */
  children: PermissiveChild<AccordionItemProps>
  /**
   * HTML tag to use for item headings.
   */
  headingTag?: AccordionHeadingTag
  /**
   * The text content of the 'Hide all sections' button at
   * the top of the accordion when all sections are expanded.
   */
  hideAllSectionsText?: string
  /**
   * The text content of the 'Hide' button within each section
   * of the accordion, which is visible when the section is
   * expanded.
   */
  hideSectionText?: string
  /**
   * Text made available to assistive technologies, like
   * screen readers, as the final part of the toggle's
   * accessible name when the section is expanded. Defaults
   * to 'Hide this section'.
   */
  hideSectionAriaLabelText?: string
  /**
   * Unique identifier for the accordion.
   *
   * Must be unique across the domain of your service if
   * rememberExpanded is set.
   */
  id: string
  /**
   * Whether the expanded/collapsed state of the accordion
   * should be saved when a user leaves the page and restored
   * when they return. Default is true.
   */
  rememberExpanded?: boolean
  /**
   * The text content of the 'Show all sections' button at the
   * top of the accordion when at least one section is collapsed.
   */
  showAllSectionsText?: string
  /**
   * Text made available to assistive technologies, like screen
   * readers, as the final part of the toggle's accessible name
   * when the section is collapsed. Defaults to 'Show this
   * section'.
   */
  showSectionAriaLabelText?: string
  /**
   * The text content of the 'Show' button within each section
   * of the accordion, which is visible when the section is
   * collapsed.
   */
  showSectionText?: string
}

function getRemountProps(props: AccordionProps) {
  const rootProps = pick(props, [
    'headingTag',
    'hideAllSectionsText',
    'hideSectionAriaLabelText',
    'hideSectionText',
    'rememberExpanded',
    'showAllSectionsText',
    'showSectionAriaLabelText',
    'showSectionText',
  ])
  const childrenProps = flattenChildren(props.children).filter(isValidElement<AccordionItemProps>).map((
    child,
  ) => pick(child.props, ['heading', 'summary', 'expanded']))

  return [rootProps, childrenProps]
}

/**
 * Accordion.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <Accordion id='example-accordion'>
 *   <AccordionItem heading='Writing well for the web'>
 *     <p className='govuk-body'>This is the content for Writing well for the web.</p>
 *   </AccordionItem>
 *   <AccordionItem heading='Writing well for specialists'>
 *     <p className='govuk-body'>This is the content for Writing well for specialists.</p>
 *   </AccordionItem>
 *   <AccordionItem heading='Know your audience'>
 *     <p className='govuk-body'>This is the content for Know your audience.</p>
 *   </AccordionItem>
 *   <AccordionItem heading='How people read'>
 *     <p className='govuk-body'>This is the content for How people read.</p>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, forwardedRef) => {
    const { ref } = useMODUKComponent('Accordion')
    const key = useRef<number>(0)
    const remountProps = getRemountProps(props)
    const previousRemountProps = usePrevious(remountProps)

    if (!isEqual(previousRemountProps, remountProps)) {
      key.current += 1
    }

    const {
      children,
      className,
      headingTag = 'h2',
      hideAllSectionsText,
      hideSectionText,
      hideSectionAriaLabelText,
      id,
      rememberExpanded,
      showAllSectionsText,
      showSectionText,
      showSectionAriaLabelText,
      ...rest
    } = props

    const contextValue = useMemo(() => ({ headingTag, id }), [headingTag, id])

    const i18nAttributes = {
      'data-i18n.hide-all-sections': hideAllSectionsText,
      'data-i18n.hide-section': hideSectionText,
      'data-i18n.hide-section-aria-label': hideSectionAriaLabelText,
      'data-i18n.show-all-sections': showAllSectionsText,
      'data-i18n.show-section': showSectionText,
      'data-i18n.show-section-aria-label': showSectionAriaLabelText,
    }

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={mergeRefs([ref, forwardedRef])}
          key={key.current}
          {...rest}
          className={clsx('govuk-accordion', className)}
          data-module='govuk-accordion'
          data-remember-expanded={rememberExpanded}
          id={id}
          {...i18nAttributes}
        >
          {Children.map(
            children,
            (child, index) => (
              <AccordionItemIndexContext.Provider value={index}>{child}</AccordionItemIndexContext.Provider>
            ),
          )}
        </div>
      </AccordionContext.Provider>
    )
  },
)

Accordion.displayName = 'Accordion'
