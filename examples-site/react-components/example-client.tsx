import { ElementType, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

function getComponent(callback: (value: ElementType) => void) {
  const reExp = /^\/react-components\/([\w|-]+)\/([\w|-]+)(\/$|$)/

  const match = window.location.pathname.match(reExp)
  const ErrorMessage = () => <div>Error finding component</div>
  if (match) {
    const [component, exampleName] = match.slice(1, 3)

    import(
      /* webpackInclude: /\/\w+\/__examples__\/(\w|-)+\.tsx$/ */
      `../../src/react/${component}/__examples__/${exampleName}`
    ).then((module) => callback(module?.default || ErrorMessage))
    return
  }
  callback(ErrorMessage)
}

getComponent((Component) => {
  const domNode = document.getElementById('root')
  if (domNode) {
    hydrateRoot(
      domNode,
      <StrictMode>
        <Component />
      </StrictMode>,
    )
  }
})
