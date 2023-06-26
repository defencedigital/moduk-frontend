import { useEffect, useRef } from 'react'

type HeaderConfig = {
  name: 'Header'
  element: HTMLElement
}

type ComponentConfig = HeaderConfig

type ComponentName = ComponentConfig['name']

type FindElementType<Name extends ComponentName> = Extract<ComponentConfig, { name: Name }>['element']

const initialiseComponent = async (componentName: ComponentName, el: HTMLElement) => {
  const client = await import('govuk-frontend')
  new client[componentName](el).init()
}

export function useMODUKComponent<
  MODUKComponent extends ComponentName,
  ComponentElement extends HTMLElement = FindElementType<MODUKComponent>,
>(
  componentName: MODUKComponent,
) {
  const ref = useRef<ComponentElement>(null)
  const previousRef = useRef<ComponentElement | null>(null)

  useEffect(() => {
    // Initialise the component if and only if the DOM element has changed
    if (ref.current && ref.current !== previousRef.current) {
      initialiseComponent(componentName, ref.current)

      previousRef.current = ref.current
    }
  })

  return { ref }
}
