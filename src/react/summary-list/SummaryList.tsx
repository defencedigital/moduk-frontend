import clsx from 'clsx'
import { type ComponentPropsWithoutRef, forwardRef, type Key, type ReactElement, type ReactNode } from 'react'
import { type SummaryCardActionsProps } from './SummaryCardActions'
import { type SummaryCardTitleProps } from './SummaryCardTitle'
import { type SummaryListActionsProps } from './SummaryListActions'
import { type SummaryListKeyProps } from './SummaryListKey'
import { type SummaryListValueProps } from './SummaryListValue'

interface SummaryCardProps {
  children?: ReactNode
  className?: string
  title?: ReactElement<SummaryCardTitleProps>
  actions?: ReactElement<SummaryCardActionsProps>
}

const SummaryCard = ({ actions, children, className, title }: SummaryCardProps) => (
  <div className={clsx('govuk-summary-card', className)}>
    <div className='govuk-summary-card__title-wrapper'>
      {title}
      {actions}
    </div>
    <div className='govuk-summary-card__content'>
      {children}
    </div>
  </div>
)

interface SummaryListRowProps {
  children?: ReactNode
  className?: string
  anyRowHasActions?: boolean
  hasActions?: boolean
}

const SummaryListRow = ({ children, className, anyRowHasActions, hasActions }: SummaryListRowProps) => (
  <div
    className={clsx(
      'govuk-summary-list__row',
      anyRowHasActions && !hasActions && 'govuk-summary-list__row--no-actions',
      className,
    )}
  >
    {children}
  </div>
)

export interface SummaryListRowObject {
  /**
   * Optional React key for the row. If not set for all
   * rows, the row index will be used.
   */
  reactKey?: Key
  /**
   * CSS classes to add to the row.
   */
  className?: string
  /**
   * An instance of SummaryListKey.
   */
  key: ReactElement<SummaryListKeyProps>
  /**
   * An instance of SummaryListValue.
   */
  value: ReactElement<SummaryListValueProps>
  /**
   * Optional instance of SummaryListActions.
   */
  actions?: ReactElement<SummaryListActionsProps>
}

export interface SummaryListProps extends ComponentPropsWithoutRef<'dl'> {
  /**
   * Summary card options.
   *
   * If this prop is set, a summary card will wrap around the summary list
   */
  card?: {
    /**
     * CSS classes to add to the card container.
     */
    className?: string
    /**
     * Optional card title – an instance of SummaryCardTitle.
     */
    title?: ReactElement<SummaryCardTitleProps>
    /**
     * Optional card actions – an instance of SummaryCardActions.
     */
    actions?: ReactElement<SummaryCardActionsProps>
  }
  /**
   * Summary list rows.
   */
  rows: SummaryListRowObject[]
}

/**
 * Summary list.
 *
 * @experimental React components are in alpha and subject to change.
 *
 * @example
 * <SummaryList
 *   rows={[
 *     {
 *       key: <SummaryListKey>Name</SummaryListKey>,
 *       value: <SummaryListValue>Sarah Philips</SummaryListValue>,
 *       actions: (
 *         <SummaryListActions>
 *           <SummaryListActionLink href='#'>
 *             Change <VisuallyHiddenText>name</VisuallyHiddenText>
 *           </SummaryListActionLink>
 *         </SummaryListActions>
 *       ),
 *     },
 *     {
 *       key: <SummaryListKey>Date of birth</SummaryListKey>,
 *       value: <SummaryListValue>5 January 1978</SummaryListValue>,
 *       actions: (
 *         <SummaryListActions>
 *           <SummaryListActionLink href='#'>
 *             Change <VisuallyHiddenText>date of birth</VisuallyHiddenText>
 *           </SummaryListActionLink>,
 *         </SummaryListActions>
 *       ),
 *     },
 *   ]}
 * />
 */
export const SummaryList = forwardRef<HTMLDListElement, SummaryListProps>(({ card, className, rows, ...rest }, ref) => {
  const anyRowHasActions = rows.some((row) => row.actions)
  const allRowsHaveKeys = rows.every((row) => row.reactKey)

  const summaryListContents = (
    <dl ref={ref} className={clsx('govuk-summary-list', className)} {...rest}>
      {rows.map(({ className: rowclassName, key, value, actions, reactKey }, index) => (
        <SummaryListRow
          key={allRowsHaveKeys ? reactKey : index}
          anyRowHasActions={anyRowHasActions}
          className={rowclassName}
          hasActions={Boolean(actions)}
        >
          {key}
          {value}
          {actions}
        </SummaryListRow>
      ))}
    </dl>
  )

  if (card) {
    return <SummaryCard {...card}>{summaryListContents}</SummaryCard>
  }

  return summaryListContents
})

SummaryList.displayName = 'SummaryList'
