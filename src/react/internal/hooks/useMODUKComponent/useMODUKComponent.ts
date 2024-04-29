import { useEffect, useRef } from 'react'

interface ComponentElement {
  Accordion: HTMLDivElement
  Header: HTMLElement
  SkipLink: HTMLAnchorElement
}

type ComponentNameLiteral = keyof ComponentElement

const initialiseComponent = async <ComponentName extends ComponentNameLiteral>(
  componentName: ComponentName,
  el: ComponentElement[ComponentName],
) => {
  const client = await import('govuk-frontend')
  /* eslint no-new: "off" */
  new client[componentName](el)
}

export function useMODUKComponent<
  ComponentName extends ComponentNameLiteral,
>(
  componentName: ComponentName,
) {
  const ref = useRef<ComponentElement[ComponentName]>(null)
  const previousRef = useRef<ComponentElement[ComponentName] | null>(null)

  useEffect(() => {
    // Initialise the component if and only if the DOM element has changed
    if (ref.current && ref.current !== previousRef.current) {
      initialiseComponent(componentName, ref.current)

      previousRef.current = ref.current
    }
  })

  return { ref }
}
