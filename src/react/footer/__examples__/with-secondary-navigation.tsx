import { Footer, FooterNavigation, FooterNavigationLink, FooterNavigationSection } from '@moduk/frontend/react'

export const Example = () => (
  <Footer
    navigation={
      <FooterNavigation>
        <FooterNavigationSection title='Two column list' width='two-thirds' columns={2}>
          <FooterNavigationLink href='#1'>Navigation item 1</FooterNavigationLink>
          <FooterNavigationLink href='#2'>Navigation item 2</FooterNavigationLink>
          <FooterNavigationLink href='#3'>Navigation item 3</FooterNavigationLink>
          <FooterNavigationLink href='#4'>Navigation item 4</FooterNavigationLink>
          <FooterNavigationLink href='#5'>Navigation item 5</FooterNavigationLink>
          <FooterNavigationLink href='#6'>Navigation item 6</FooterNavigationLink>
        </FooterNavigationSection>
        <FooterNavigationSection title='Single column list' width='one-third'>
          <FooterNavigationLink href='#1'>Navigation item 1</FooterNavigationLink>
          <FooterNavigationLink href='#2'>Navigation item 2</FooterNavigationLink>
          <FooterNavigationLink href='#3'>Navigation item 3</FooterNavigationLink>
        </FooterNavigationSection>
      </FooterNavigation>
    }
  >
  </Footer>
)
