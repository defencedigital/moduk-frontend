import { render } from '@testing-library/react'
import type { JSX, ReactNode } from 'react'
import { beforeAll, describe, expect, test } from 'vitest'
import { Header, HeaderNavigationItem, HeaderNavigationLink } from '..'

const RouterLink = ({ to, children }: { to: string; children: ReactNode }): JSX.Element => <a href={to}>{children}</a>

describe('Header', () => {
  beforeAll(() => {
    // 'govuk-frontend-supported' not included in <body> by default since Node.js environments do not natively support HTMLScriptElement
    document.body.className += ' govuk-frontend-supported'
  })
  test('renders custom link components', () => {
    const { getByText } = render(
      <Header
        homepageUrl='#'
        serviceName='Service name'
        serviceUrl='#'
      >
        <HeaderNavigationItem active>
          <HeaderNavigationLink component={RouterLink} to='#1'>Navigation item 1</HeaderNavigationLink>
        </HeaderNavigationItem>
      </Header>,
    )

    expect(getByText('Navigation item 1')).toHaveAttribute('href', '#1')
  })
})
