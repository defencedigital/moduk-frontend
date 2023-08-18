import { Header, HeaderNavigationItem, HeaderNavigationLink } from '@moduk/frontend/react'

export const Example = () => (
  <Header
    homepageUrl='#'
    serviceName='Service name'
    serviceUrl='#'
  >
    <HeaderNavigationItem active>
      <HeaderNavigationLink href='#1'>Navigation item 1</HeaderNavigationLink>
    </HeaderNavigationItem>
    <HeaderNavigationItem>
      <HeaderNavigationLink href='#2'>Navigation item 2</HeaderNavigationLink>
    </HeaderNavigationItem>
    <HeaderNavigationItem>
      <HeaderNavigationLink href='#3'>Navigation item 3</HeaderNavigationLink>
    </HeaderNavigationItem>
    <HeaderNavigationItem>
      <HeaderNavigationLink href='#4'>Navigation item 4</HeaderNavigationLink>
    </HeaderNavigationItem>
  </Header>
)
