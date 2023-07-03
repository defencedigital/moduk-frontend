'use client'

import clsx from 'clsx'
import { isEqual, pick } from 'lodash'
import type { JSX, ReactElement } from 'react'
import { Children, forwardRef, isValidElement, useRef } from 'react'
import flattenChildren from 'react-keyed-flatten-children'

import { mergeRefs } from 'react-merge-refs'
import { useMODUKComponent } from '../hooks/useMODUKComponent'
import { usePrevious } from '../hooks/usePrevious'
import { AccordionContext } from './AccordionContext'
import type { AccordionHeadingTag } from './AccordionHeadingTag'
import type { AccordionItemProps } from './AccordionItem'
import { AccordionItemIndexContext } from './AccordionItemIndexContext'

type AccordionChild = ReactElement<AccordionItemProps> | boolean | null | Iterable<AccordionChild>

export interface AccordionProps {
  children: AccordionChild
  headingTag?: AccordionHeadingTag
  hideAllSectionsText?: string
  hideSectionText?: string
  hideSectionAriaLabelText?: string
  id: string
  rememberExpanded?: boolean
  showAllSectionsText?: string
  showSectionAriaLabelText?: string
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

export const Accordion = forwardRef<HTMLDivElement, AccordionProps & JSX.IntrinsicElements['div']>(
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

    const i18nAttributes = {
      'data-i18n.hide-all-sections': hideAllSectionsText,
      'data-i18n.hide-section': hideSectionText,
      'data-i18n.hide-section-aria-label': hideSectionAriaLabelText,
      'data-i18n.show-all-sections': showAllSectionsText,
      'data-i18n.show-section': showSectionText,
      'data-i18n.show-section-aria-label': showSectionAriaLabelText,
    }

    return (
      <AccordionContext.Provider value={{ headingTag, id }}>
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
