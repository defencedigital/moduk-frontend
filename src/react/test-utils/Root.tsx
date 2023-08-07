import type { PropsWithChildren } from 'react'
import { MODUKBody } from '../MODUKBody/MODUKBody'

interface RootProps {
  exampleName?: string
  component?: string
}
export const Root = ({ exampleName, component, children }: PropsWithChildren<RootProps>) => {
  const titlePrefix = exampleName && component ? `${exampleName} – ${component} – ` : ''
  return (
    <html lang='en'>
      <head>
        <title>{`${titlePrefix}MOD.UK Frontend React`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link href='/css/index.css' rel='stylesheet' />
      </head>
      <MODUKBody>
        <div id='root'>
          {children}
        </div>
        <script src='/react-example-client/index.js'></script>
      </MODUKBody>
    </html>
  )
}
