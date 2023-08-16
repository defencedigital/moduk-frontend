import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef, useState } from 'react'
import { describe, expect, test } from 'vitest'
import { ErrorMessage, Hint, Input, Label } from '../..'

describe('Input', () => {
  test('sets custom form group classes', () => {
    const { container } = render(
      <Input
        formGroupClassName='form-group-class-name'
        label={
          <Label className='govuk-label--l' isPageHeading>
            What is the name of the event?
          </Label>
        }
        name='event-name-default'
      />,
    )

    expect(container.querySelector('.govuk-form-group')).toHaveClass('form-group-class-name')
  })

  test('generates ids automatically', () => {
    const { container, getByRole, getByText } = render(
      <Input
        errorMessage={<ErrorMessage>Enter an event name</ErrorMessage>}
        hint={<Hint>The name you’ll use on promotional material</Hint>}
        id='explicit-id'
        label={
          <Label className='govuk-label--l' isPageHeading>
            What is the name of the event?
          </Label>
        }
        name='event-name-with-error'
      />,
    )

    const input = getByRole('textbox')

    expect(input.id).toBeTruthy()
    expect(container.querySelector('.govuk-label')).toHaveAttribute('id', `${input.id}-label`)
    expect(getByText('The name you’ll use on promotional material')).toHaveAttribute('id', `${input.id}-hint`)
    expect(getByText('Enter an event name')).toHaveAttribute('id', `${input.id}-error`)
  })

  test('uses an explicitly set id', () => {
    const { container, getByRole, getByText } = render(
      <Input
        errorMessage={<ErrorMessage>Enter an event name</ErrorMessage>}
        hint={<Hint>The name you’ll use on promotional material</Hint>}
        id='explicit-id'
        label={
          <Label className='govuk-label--l' isPageHeading>
            What is the name of the event?
          </Label>
        }
        name='event-name-with-error'
      />,
    )

    expect(getByRole('textbox')).toHaveAttribute('id', 'explicit-id')
    expect(container.querySelector('.govuk-label')).toHaveAttribute('id', 'explicit-id-label')
    expect(getByText('The name you’ll use on promotional material')).toHaveAttribute('id', 'explicit-id-hint')
    expect(getByText('Enter an event name')).toHaveAttribute('id', 'explicit-id-error')
  })

  test('can be controlled', async () => {
    const Example = () => {
      const [value, setValue] = useState('initial')

      return (
        <>
          <div data-testid='value'>{value}</div>
          <button
            onClick={() => {
              setValue('changed value')
            }}
          >
            change value
          </button>
          <Input
            label={<Label>name</Label>}
            name='event-name-default'
            onChange={(event) => {
              setValue(event.currentTarget.value)
            }}
            value={value}
          />
        </>
      )
    }

    const user = userEvent.setup()

    const { getByLabelText, getByText, getByTestId } = render(<Example />)

    const input = getByLabelText('name')
    expect(input).toHaveValue('initial')

    await user.clear(input)
    await user.type(input, 'typed value')
    expect(input).toHaveValue('typed value')
    expect(getByTestId('value')).toHaveTextContent(/^typed value$/)

    await user.click(getByText('change value'))
    expect(input).toHaveValue('changed value')
  })

  test('can be uncontrolled', async () => {
    const Example = () => {
      const [value, setValue] = useState('initial')
      const ref = useRef<HTMLInputElement>(null)

      return (
        <>
          <div data-testid='value'>{value}</div>
          <button
            onClick={() => {
              setValue(ref.current?.value ?? '')
            }}
          >
            get value
          </button>
          <Input
            ref={ref}
            label={<Label>name</Label>}
            name='event-name-default'
            defaultValue={value}
          />
        </>
      )
    }

    const user = userEvent.setup()

    const { getByLabelText, getByText, getByTestId } = render(<Example />)

    const input = getByLabelText('name')
    expect(input).toHaveValue('initial')

    await user.clear(input)
    await user.type(input, 'typed value')
    expect(input).toHaveValue('typed value')
    expect(getByTestId('value')).toHaveTextContent(/^initial$/)

    await user.click(getByText('get value'))
    expect(getByTestId('value')).toHaveTextContent(/^typed value$/)
  })
})
