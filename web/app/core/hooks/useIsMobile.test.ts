import { renderHook, act } from '@testing-library/react-hooks'
import { useIsMobile } from './useIsMobile' // Adjust the path to your file

describe('useIsMobile hook', () => {
  test('should initially return false on desktop', () => {
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  test('should return true on mobile', () => {
    // Simulate a mobile screen size
    window.innerWidth = 767
    act(() => {
      renderHook(() => useIsMobile())
    })

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  test('should update state on window resize', () => {
    const { result } = renderHook(() => useIsMobile())

    // Simulate a window resize to a mobile size
    window.innerWidth = 767
    window.dispatchEvent(new Event('resize'))

    expect(result.current).toBe(true)
  })
})
