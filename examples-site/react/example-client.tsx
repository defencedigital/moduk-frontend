import type { ComponentType } from 'react'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

async function getComponent(): Promise<ComponentType> {
  const regex = /^\/react\/(?<component>[\w|-]+)\/(?<exampleName>[\w|-]+)\/?$/

  const match = window.location.pathname.match(regex)

  if (!match || !match?.groups) {
    throw new Error('404, No component found')
  }
  const { component, exampleName } = match.groups

  return (await import(
    /* webpackInclude: /\/\w+\/__examples__\/(\w|-)+\.tsx$/ */
    `../../src/react/${component}/__examples__/${exampleName}`
  )).default as ComponentType
}

;(async () => {
  const domNode = document.getElementById('root')
  if (!domNode) {
    return
  }

  try {
    const Component = await getComponent()
    hydrateRoot(
      domNode,
      <StrictMode>
        <Component />
      </StrictMode>,
    )
  } catch (err) {
    hydrateRoot(
      domNode,
      <StrictMode>
        <div>{err instanceof Error ? err.message : 'Unexpected Error'}</div>
      </StrictMode>,
    )
  }
})()
