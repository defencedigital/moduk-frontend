import { escape } from 'lodash'
import type { ComponentType } from 'react'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Root } from '../../src/react/internal/test-utils/Root'

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

const getParams = () => {
  const regex = /^\/react\/components\/(?<component>[\w|-]+)\/(?<exampleName>[\w|-]+)\/?$/

  const match = window.location.pathname.match(regex)

  if (!match || !match?.groups) {
    throw new Error('No component found')
  }
  const { component, exampleName } = match.groups
  return { component, exampleName }
}

const getComponent = async (): Promise<ComponentType> => {
  const { component, exampleName } = getParams()
  return (await import(
    /* webpackInclude: /\/(\w|-)+\/__examples__\/(\w|-)+\.tsx$/ */
    `../../src/react/${component}/__examples__/${exampleName}`
  )).Example as ComponentType
}
;(async () => {
  try {
    const { component, exampleName } = getParams()

    const Component = await getComponent()

    hydrateRoot(
      document,
      <StrictMode>
        <Root exampleName={exampleName} component={component}>
          <Component />
        </Root>
      </StrictMode>,
      {
        onRecoverableError: (error, errorInfo) => {
          const info = errorInfo.componentStack
          if (error instanceof Error) {
            document.body.innerHTML = errorDom(error.message, info)
          }
        },
      },
    )
  } catch (err) {
    hydrateRoot(
      document,
      <StrictMode>
        <Root>
          <div>{err instanceof Error ? err.message : 'Unexpected Error'}</div>
        </Root>
      </StrictMode>,
    )
  }
})()
