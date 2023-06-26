import { escape } from 'lodash'
import type { ComponentType } from 'react'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

const errorDom = (
  title: string,
  info?: string,
) => (
  `<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">${escape(title)}</h2>
    ${
    info
      ? `<div class="govuk-error-summary__body">
      <ul class="govuk-list govuk-error-summary__list">
        <li>${escape(info)}</li>
      </ul>
    </div>`
      : ''
  }
  </div>
</div>`
)

async function getComponent(): Promise<ComponentType> {
  const regex = /^\/react\/components\/(?<component>[\w|-]+)\/(?<exampleName>[\w|-]+)\/?$/

  const match = window.location.pathname.match(regex)

  if (!match || !match?.groups) {
    throw new Error('404, No component found')
  }
  const { component, exampleName } = match.groups

  return (await import(
    /* webpackInclude: /\/(\w|-)+\/__examples__\/(\w|-)+\.tsx$/ */
    `../../src/react/${component}/__examples__/${exampleName}`
  )).Example as ComponentType
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
      {
        onRecoverableError: (error, errorInfo) => {
          const info = errorInfo.componentStack
          if (error instanceof Error) {
            domNode.innerHTML = errorDom(error.message, info)
          }
        },
      },
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
