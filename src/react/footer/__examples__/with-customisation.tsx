import { Footer, FooterMeta, FooterMetaLink } from '@moduk/frontend/react'

export const Example = () => (
  <Footer
    copyright='Copyright text'
    contentLicence='Content licence text'
    meta={
      <FooterMeta content='Meta content' visuallyHiddenTitle='Visually hidden title'>
        <FooterMetaLink href='#1'>Item 1</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 2</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 3</FooterMetaLink>
      </FooterMeta>
    }
  />
)
