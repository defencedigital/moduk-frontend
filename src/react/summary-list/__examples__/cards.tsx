import {
  SummaryCardTitle,
  SummaryList,
  SummaryListActionLink,
  SummaryListActions,
  SummaryListKey,
  SummaryListValue,
  VisuallyHiddenText,
} from '@moduk/frontend/react'

export const Example = () => (
  <div>
    <SummaryList
      card={{
        title: <SummaryCardTitle>Lead tenant</SummaryCardTitle>,
      }}
      rows={[
        {
          key: <SummaryListKey>Age</SummaryListKey>,
          value: <SummaryListValue>38</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>age</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Nationality</SummaryListKey>,
          value: <SummaryListValue>UK national resident in UK</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>nationality</VisuallyHiddenText>
              </SummaryListActionLink>,
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Working situation</SummaryListKey>,
          value: <SummaryListValue>Part time – less than 30 hours a week</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>working situation</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
      ]}
    />
    <SummaryList
      card={{
        title: <SummaryCardTitle>Person 2</SummaryCardTitle>,
      }}
      rows={[
        {
          key: <SummaryListKey>Details known</SummaryListKey>,
          value: <SummaryListValue>Yes</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>whether details are known</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Relationship to lead tenant</SummaryListKey>,
          value: <SummaryListValue>Partner</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>relationship to lead tenant</VisuallyHiddenText>
              </SummaryListActionLink>,
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Age</SummaryListKey>,
          value: <SummaryListValue>42</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>age</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Working situation</SummaryListKey>,
          value: <SummaryListValue>Unable to work because of long-term sickness or disability</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>working situation</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
      ]}
    />
    <SummaryList
      card={{
        title: <SummaryCardTitle>Person 3</SummaryCardTitle>,
      }}
      rows={[
        {
          key: <SummaryListKey>Details known</SummaryListKey>,
          value: <SummaryListValue>Yes</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>whether details are known</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Relationship to lead tenant</SummaryListKey>,
          value: <SummaryListValue>Child</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>relationship to lead tenant</VisuallyHiddenText>
              </SummaryListActionLink>,
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Age</SummaryListKey>,
          value: <SummaryListValue>7</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>age</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
        {
          key: <SummaryListKey>Working situation</SummaryListKey>,
          value: <SummaryListValue>Child under 16</SummaryListValue>,
          actions: (
            <SummaryListActions>
              <SummaryListActionLink href='#'>
                Change <VisuallyHiddenText>working situation</VisuallyHiddenText>
              </SummaryListActionLink>
            </SummaryListActions>
          ),
        },
      ]}
    />
  </div>
)
