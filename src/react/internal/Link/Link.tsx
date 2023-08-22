import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentType,
  type ElementType,
  forwardRef,
  type JSX,
} from 'react'

type LinkProps<T extends ElementType> = {
  /**
   * The component to use for links (for example, a Link component
   * from a routing library).
   *
   * Defaults to an anchor tag.
   */
  component?: T
} & ComponentPropsWithoutRef<T>

type LinksComponentType = Extract<ElementType, 'a' | ComponentType>

export interface LinkComponent<Props = object> {
  <T extends LinksComponentType = 'a'>(
    props: LinkProps<T> & { ref?: ComponentPropsWithRef<T>['ref'] } & Props,
  ): JSX.Element | null
  displayName?: string | undefined
}

export const LinkBase: LinkComponent = forwardRef(<T extends LinksComponentType>(
  { children, component, ...props }: LinkProps<T>,
  ref?: ComponentPropsWithRef<T>['ref'],
) => {
  const Component = component ?? 'a'

  return <Component ref={ref} {...props}>{children}</Component>
})

LinkBase.displayName = 'LinkBase'
