import {
  Footer,
  FooterMeta,
  FooterMetaLink,
  FooterNavigation,
  FooterNavigationLink,
  FooterNavigationSection,
} from '@moduk/frontend/react'
import { render } from '@testing-library/react'
import type { JSX, ReactNode } from 'react'
import { describe, expect, test } from 'vitest'

const RouterLink = ({ to, children }: { to: string; children: ReactNode }): JSX.Element => <a href={to}>{children}</a>

describe('Footer', () => {
  test('renders custom meta link components', () => {
    const { getByText } = render(
      <Footer
        meta={
          <FooterMeta>
            <FooterMetaLink component={RouterLink} to='#1'>Item 1</FooterMetaLink>
          </FooterMeta>
        }
      />,
    )

    expect(getByText('Item 1')).toHaveAttribute('href', '#1')
  })

  test('renders custom navigation link components', () => {
    const { getByText } = render(
      <Footer
        navigation={
          <FooterNavigation>
            <FooterNavigationSection title='Two column list' width='two-thirds' columns={2}>
              <FooterNavigationLink component={RouterLink} to='#1'>Navigation item 1</FooterNavigationLink>
            </FooterNavigationSection>
          </FooterNavigation>
        }
      />,
    )

    expect(getByText('Navigation item 1')).toHaveAttribute('href', '#1')
  })
})
