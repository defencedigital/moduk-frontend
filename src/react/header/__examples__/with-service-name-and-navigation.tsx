import { Header, HeaderNavigationItem } from '@moduk/frontend/react'

export const Example = () => (
  <Header
    homepageUrl='#'
    serviceName='Service name'
    serviceUrl='#'
  >
    <HeaderNavigationItem active href='#1'>Navigation item 1</HeaderNavigationItem>
    <HeaderNavigationItem href='#2'>Navigation item 2</HeaderNavigationItem>
    <HeaderNavigationItem href='#3'>Navigation item 3</HeaderNavigationItem>
    <HeaderNavigationItem href='#4'>Navigation item 4</HeaderNavigationItem>
  </Header>
)
