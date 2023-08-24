import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef, useState } from 'react'
import { describe, expect, test } from 'vitest'
import { ErrorMessage, Hint, Label, Textarea } from '../..'

describe('Textarea', () => {
  test('sets custom form group classes', () => {
    const { container } = render(
      <Textarea
        formGroupClassName='form-group-class-name'
        label={
          <Label className='govuk-label--l' isPageHeading>
            What is the event about?
          </Label>
        }
        name='event-description-default'
      />,
    )

    expect(container.querySelector('.govuk-form-group')).toHaveClass('form-group-class-name')
  })

  test('generates ids automatically', () => {
    const { container, getByRole, getByText } = render(
      <Textarea
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

    const textarea = getByRole('textbox')

    expect(textarea.id).toBeTruthy()
    expect(container.querySelector('.govuk-label')).toHaveAttribute('id', `${textarea.id}-label`)
    expect(getByText('The name you’ll use on promotional material')).toHaveAttribute('id', `${textarea.id}-hint`)
    expect(getByText('Enter an event name')).toHaveAttribute('id', `${textarea.id}-error`)
  })

  test('uses an explicitly set id', () => {
    const { container, getByRole, getByText } = render(
      <Textarea
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
          <Textarea
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

    const textarea = getByLabelText('name')
    expect(textarea).toHaveValue('initial')

    await user.clear(textarea)
    await user.type(textarea, 'typed value')
    expect(textarea).toHaveValue('typed value')
    expect(getByTestId('value')).toHaveTextContent(/^typed value$/)

    await user.click(getByText('change value'))
    expect(textarea).toHaveValue('changed value')
  })

  test('can be uncontrolled', async () => {
    const Example = () => {
      const [value, setValue] = useState('initial')
      const ref = useRef<HTMLTextAreaElement>(null)

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
          <Textarea
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

    const textarea = getByLabelText('name')
    expect(textarea).toHaveValue('initial')

    await user.clear(textarea)
    await user.type(textarea, 'typed value')
    expect(textarea).toHaveValue('typed value')
    expect(getByTestId('value')).toHaveTextContent(/^initial$/)

    await user.click(getByText('get value'))
    expect(getByTestId('value')).toHaveTextContent(/^typed value$/)
  })
})
