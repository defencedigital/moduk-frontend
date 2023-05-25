import { render, waitFor } from '@testing-library/react'
import { Header as GOVUKHeader } from 'govuk-frontend'
import type { MockedClass } from 'vitest'
import { describe, expect, test, vi } from 'vitest'
import { useMODUKComponent } from '../useMODUKComponent'

const Header = GOVUKHeader as MockedClass<typeof GOVUKHeader>
vi.mock('govuk-frontend')

const ExampleComponent = () => {
  const { ref } = useMODUKComponent('Header')
  return <header ref={ref}>ExampleComponent</header>
}
describe('useMODUKComponent', () => {
  test('should call init method for a component', async () => {
    render(<ExampleComponent />)
    await waitFor(() => expect(Header).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(Header.prototype.init).toHaveBeenCalledTimes(1))
  })
})
