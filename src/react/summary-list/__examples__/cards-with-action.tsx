import {
  SummaryCardActions,
  SummaryCardTitle,
  SummaryList,
  SummaryListActionLink,
  SummaryListKey,
  SummaryListValue,
  VisuallyHiddenText,
} from '@moduk/frontend/react'

export const Example = () => (
  <div>
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
          value: (
            <SummaryListValue>
              English (3DMD)
              <br />
              PGCE with QTS full time
            </SummaryListValue>
          ),
        },
        {
          key: <SummaryListKey>Location</SummaryListKey>,
          value: (
            <SummaryListValue>
              School name
              <br />
              Road, City, SW1 1AA
            </SummaryListValue>
          ),
        },
      ]}
    />
    <SummaryList
      card={{
        title: <SummaryCardTitle>University of Bristol</SummaryCardTitle>,
        actions: (
          <SummaryCardActions>
            <SummaryListActionLink href='#'>
              Delete choice <VisuallyHiddenText>of University of Bristol</VisuallyHiddenText>
            </SummaryListActionLink>
            <SummaryListActionLink href='#'>
              Withdraw <VisuallyHiddenText>from University of Bristol</VisuallyHiddenText>
            </SummaryListActionLink>
          </SummaryCardActions>
        ),
      }}
      rows={[
        {
          key: <SummaryListKey>Course</SummaryListKey>,
          value: (
            <SummaryListValue>
              English (Q3X1)
              <br />
              PGCE with QTS full time
            </SummaryListValue>
          ),
        },
        {
          key: <SummaryListKey>Location</SummaryListKey>,
          value: (
            <SummaryListValue>
              School name
              <br />
              Road, City, SW2 1AA
            </SummaryListValue>
          ),
        },
      ]}
    />
  </div>
)
