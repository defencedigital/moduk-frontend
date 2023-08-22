import { SummaryList, SummaryListKey, SummaryListValue } from '@moduk/frontend/react'

export const Example = () => (
  <SummaryList
    rows={[
      {
        key: <SummaryListKey>Name</SummaryListKey>,
        value: <SummaryListValue>Sarah Philips</SummaryListValue>,
      },
      {
        key: <SummaryListKey>Date of birth</SummaryListKey>,
        value: <SummaryListValue>5 January 1978</SummaryListValue>,
      },
      {
        key: <SummaryListKey>Address</SummaryListKey>,
        value: (
          <SummaryListValue>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </SummaryListValue>
        ),
      },
      {
        key: <SummaryListKey>Contact details</SummaryListKey>,
        value: (
          <SummaryListValue>
            <p className='govuk-body'>07700 900457</p>
            <p className='govuk-body'>sarah.phillips@example.com</p>
          </SummaryListValue>
        ),
      },
    ]}
  />
)
