import {
  SummaryList,
  SummaryListActionLink,
  SummaryListActions,
  SummaryListKey,
  SummaryListValue,
  VisuallyHiddenText,
} from '@moduk/frontend/react'

export const Example = () => (
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
      {
        key: <SummaryListKey>Date of birth</SummaryListKey>,
        value: <SummaryListValue>5 January 1978</SummaryListValue>,
        actions: (
          <SummaryListActions>
            <SummaryListActionLink href='#'>
              Change <VisuallyHiddenText>date of birth</VisuallyHiddenText>
            </SummaryListActionLink>,
          </SummaryListActions>
        ),
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
        actions: (
          <SummaryListActions>
            <SummaryListActionLink href='#'>
              Change <VisuallyHiddenText>address</VisuallyHiddenText>
            </SummaryListActionLink>
          </SummaryListActions>
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
        actions: (
          <SummaryListActions>
            <SummaryListActionLink href='#'>
              Change <VisuallyHiddenText>contact details</VisuallyHiddenText>
            </SummaryListActionLink>
          </SummaryListActions>
        ),
      },
    ]}
  />
)
