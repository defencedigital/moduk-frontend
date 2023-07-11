import { render, waitFor } from '@testing-library/react'
import { useEffect, useState } from 'react'
import { expect, test } from 'vitest'
import { MODUKBody } from '../MODUKBody'

test('should add js-enabled class to the body', async () => {
  const ExampleComponentBodyClass = () => {
    const [flag, setFlag] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setFlag(true)
      }, 100)
    }, [])

    return (
      <MODUKBody className={flag ? 'flag' : 'no-flag'}>
        <header>ExampleComponent</header>
      </MODUKBody>
    )
  }
  render(
    <ExampleComponentBodyClass />,
    {
      container: document.documentElement,
    },
  )
  await waitFor(() => expect(document.body).toHaveClass('js-enabled', 'flag'))
})
