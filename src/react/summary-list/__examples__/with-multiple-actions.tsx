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
            <SummaryListActionLink href='#'>
              Remove <VisuallyHiddenText>name</VisuallyHiddenText>
            </SummaryListActionLink>
          </SummaryListActions>
        ),
      },
    ]}
  />
)
