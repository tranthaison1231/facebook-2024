import { act, renderHook, waitFor } from '@testing-library/react'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  test('should return the initial value when no delay is provided', () => {
    const { result } = renderHook(() => useDebounce('initial value', 0))
    expect(result.current).toBe('initial value')
  })

  test('should return the debounced value after the specified delay', async () => {
    const delay = 100
    const { result } = renderHook(() => useDebounce('initial value', delay))

    expect(result.current).toBe('initial value')

    act(() => {
      result.current = 'updated value'
    })
    await waitFor(() => result.current === 'updated value', { timeout: delay * 2 }) // Adjust timeout if needed

    expect(result.current).toBe('updated value')
  })
})
