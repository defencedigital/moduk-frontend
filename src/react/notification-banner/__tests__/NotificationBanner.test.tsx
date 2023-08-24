import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { NotificationBanner } from '../NotificationBanner'

describe('NotificationBanner', () => {
  test('wraps complex text in a `<p>`', () => {
    const { container } = render(
      <NotificationBanner>
        There may be a delay in processing your{' application because of the coronavirus outbreak.'}
      </NotificationBanner>,
    )

    expect(container.querySelector('p')).toBeInTheDocument()
  })

  test('does not wrap React elements in a `<p>`', () => {
    const { container } = render(
      <NotificationBanner>
        <h3>There may be a delay in processing your{' application because of the coronavirus outbreak.'}</h3>
      </NotificationBanner>,
    )

    expect(container.querySelector('p')).not.toBeInTheDocument()
  })

  test('uses a custom title ID', () => {
    const { getByRole } = render(
      <NotificationBanner titleId='custom-id'>
        There may be a delay in processing your application because of the coronavirus outbreak.
      </NotificationBanner>,
    )

    expect(getByRole('region')).toHaveAccessibleName('Important')
    expect(getByRole('heading')).toHaveAttribute('id', 'custom-id')
  })

  test('focuses the banner when role is `alert`', () => {
    const { getByRole } = render(
      <NotificationBanner role='alert'>
        There may be a delay in processing your application because of the coronavirus outbreak.
      </NotificationBanner>,
    )

    expect(getByRole('alert')).toHaveFocus()
  })
})
