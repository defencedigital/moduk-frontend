import { Footer, FooterMeta, FooterMetaLink } from '@moduk/frontend/react'

export const Example = () => (
  <Footer
    meta={
      <FooterMeta>
        <FooterMetaLink href='#1'>Item 1</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 2</FooterMetaLink>
        <FooterMetaLink href='#2'>Item 3</FooterMetaLink>
      </FooterMeta>
    }
  />
)
