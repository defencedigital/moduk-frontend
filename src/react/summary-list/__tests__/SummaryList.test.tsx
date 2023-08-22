import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import {
  SummaryCardActions,
  SummaryCardTitle,
  SummaryList,
  SummaryListActionLink,
  SummaryListActions,
  SummaryListKey,
  SummaryListValue,
  VisuallyHiddenText,
} from '../..'

describe('SummaryList', () => {
  test('does not wrap row actions in a <ul> when there is only one', () => {
    const { queryByRole } = render(
      <SummaryList
        rows={[
          {
            key: <SummaryListKey>Name</SummaryListKey>,
            value: <SummaryListValue>Sarah Philips</SummaryListValue>,
            actions: (
              <SummaryListActions>
                <SummaryListActionLink href='#'>
                  Change <VisuallyHiddenText>name</VisuallyHiddenText>
                </SummaryListActionLink>
              </SummaryListActions>
            ),
          },
        ]}
      >
      </SummaryList>,
    )

    expect(queryByRole('list')).not.toBeInTheDocument()
    expect(queryByRole('listitem')).not.toBeInTheDocument()
  })

  test('wraps row actions in a <ul> when there is more than one', () => {
    const { getAllByRole } = render(
      <SummaryList
        rows={[
          {
            key: <SummaryListKey>Name</SummaryListKey>,
            value: <SummaryListValue>Sarah Philips</SummaryListValue>,
            actions: (
              <SummaryListActions>
                <SummaryListActionLink href='#'>
                  Action 1
                </SummaryListActionLink>
                <SummaryListActionLink href='#'>
                  Action 2
                </SummaryListActionLink>
              </SummaryListActions>
            ),
          },
        ]}
      >
      </SummaryList>,
    )

    expect(getAllByRole('list')).toHaveLength(1)
    expect(getAllByRole('listitem')).toHaveLength(2)
  })

  test('does not wrap card actions in a <ul> when there is only one', () => {
    const { queryByRole } = render(
      <SummaryList
        card={{
          title: <SummaryCardTitle>University of Gloucestershire</SummaryCardTitle>,
          actions: (
            <SummaryCardActions>
              <SummaryListActionLink href='#'>
                Withdraw <VisuallyHiddenText>from University of Gloucestershire</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryCardActions>
          ),
        }}
        rows={[
          {
            key: <SummaryListKey>Course</SummaryListKey>,
            value: <SummaryListValue>English (3DMD)</SummaryListValue>,
          },
        ]}
      >
      </SummaryList>,
    )

    expect(queryByRole('list')).not.toBeInTheDocument()
    expect(queryByRole('listitem')).not.toBeInTheDocument()
  })

  test('wraps row actions in a <ul> when there is more than one', () => {
    const { getAllByRole } = render(
      <SummaryList
        card={{
          title: <SummaryCardTitle>University of Gloucestershire</SummaryCardTitle>,
          actions: (
            <SummaryCardActions>
              <SummaryListActionLink href='#'>
                Delete choice <VisuallyHiddenText>of University of Gloucestershire</VisuallyHiddenText>
              </SummaryListActionLink>
              <SummaryListActionLink href='#'>
                Withdraw <VisuallyHiddenText>from University of Gloucestershire</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryCardActions>
          ),
        }}
        rows={[
          {
            key: <SummaryListKey>Course</SummaryListKey>,
            value: <SummaryListValue>English (3DMD)</SummaryListValue>,
          },
        ]}
      >
      </SummaryList>,
    )

    expect(getAllByRole('list')).toHaveLength(1)
    expect(getAllByRole('listitem')).toHaveLength(2)
  })
})
