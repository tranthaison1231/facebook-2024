import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import { useIntersectionObserver } from './useIntersectionObserver'

describe('useIntersectionObserver', () => {
    let mockObserve: Mock
    let mockDisconnect: Mock
    let mockCallback: Mock

    beforeEach(() => {
        mockObserve = vi.fn()
        mockDisconnect = vi.fn()
        mockCallback = vi.fn()

        global.IntersectionObserver = vi.fn().mockImplementation(() => ({
            observe: mockObserve,
            disconnect: mockDisconnect,
            unobserve: vi.fn(),
            takeRecords: vi.fn(),
            root: null,
            rootMargin: '',
            thresholds: [],
        }))
    })

    it('should create an IntersectionObserver and observe the node', () => {
        const { result } = renderHook(() => useIntersectionObserver(mockCallback, []))
        const node = document.createElement('div')

        result.current(node)

        expect(global.IntersectionObserver).toHaveBeenCalled()
        expect(mockObserve).toHaveBeenCalledWith(node)
    })

    it('should disconnect previous observer when called with a new node', () => {
        const { result } = renderHook(() => useIntersectionObserver(mockCallback, []))
        const node1 = document.createElement('div')
        const node2 = document.createElement('div')

        result.current(node1)
        result.current(node2)

        expect(mockDisconnect).toHaveBeenCalledTimes(1)
        expect(mockObserve).toHaveBeenCalledTimes(2)
        expect(mockObserve).toHaveBeenNthCalledWith(1, node1)
        expect(mockObserve).toHaveBeenNthCalledWith(2, node2)
    })

    it('should call the callback when intersection is detected', () => {
        const { result } = renderHook(() => useIntersectionObserver(mockCallback, []))
        const node = document.createElement('div')

        result.current(node)

        const [[observerCallback]] = (global.IntersectionObserver as Mock).mock.calls
        observerCallback([{ isIntersecting: true }])

        expect(mockCallback).toHaveBeenCalledTimes(1)
    })

    it('should not call the callback when intersection is not detected', () => {
        const { result } = renderHook(() => useIntersectionObserver(mockCallback, []))
        const node = document.createElement('div')

        result.current(node)

        const [[observerCallback]] = (global.IntersectionObserver as Mock).mock.calls
        observerCallback([{ isIntersecting: false }])

        expect(mockCallback).not.toHaveBeenCalled()
    })
})