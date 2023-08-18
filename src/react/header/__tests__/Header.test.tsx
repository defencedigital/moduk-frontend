import { Header, HeaderNavigationItem, HeaderNavigationLink } from '@moduk/frontend/react'
import { render } from '@testing-library/react'
import type { JSX, ReactNode } from 'react'
import { describe, expect, test } from 'vitest'

const RouterLink = ({ to, children }: { to: string; children: ReactNode }): JSX.Element => <a href={to}>{children}</a>

describe('Header', () => {
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
