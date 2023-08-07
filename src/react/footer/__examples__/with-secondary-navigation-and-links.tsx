import {
  Footer,
  FooterMeta,
  FooterMetaLink,
  FooterNavigation,
  FooterNavigationLink,
  FooterNavigationSection,
} from '@moduk/frontend/react'

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
    meta={
      <FooterMeta
        content={
          <>
            Built by <a href='#' className='govuk-footer__link'>Defence Digital</a>
          </>
        }
      >
        <FooterMetaLink href='#1'>Item 1</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 2</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 3</FooterMetaLink>
      </FooterMeta>
    }
  >
  </Footer>
)
