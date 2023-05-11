import { Header } from '../Header'

export default () => (
  <Header
    homepageUrl='#'
    serviceName='Service name'
    serviceUrl='#'
    navigation={[{
      key: '1',
      href: '#1',
      content: 'Navigation item 1',
      active: true,
    }, {
      key: '2',
      href: '#2',
      content: 'Navigation item 2',
    }, {
      key: '3',
      href: '#3',
      content: 'Navigation item 3',
    }, {
      key: '4',
      href: '#4',
      content: 'Navigation item 4',
    }]}
  />
)
