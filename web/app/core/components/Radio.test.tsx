import { render, screen } from '@testing-library/react'
import Radio from './Radio'

describe('Radio component', () => {
  test('renders correctly with basic props', () => {
    render(<Radio title="Basic Radio" content="Radio content" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('Basic Radio')).toBeInTheDocument()
    expect(screen.getByText('Radio content')).toBeInTheDocument()
  })

  test('generates a unique ID for each instance', () => {
    const { container } = render(<Radio title="Radio 1" />)
    const { container: container2 } = render(<Radio title="Radio 2" />)

    const id1 = container.querySelector('input')!.id
    const id2 = container2.querySelector('input')!.id

    expect(id1).not.toBe(id2)
  })
})
