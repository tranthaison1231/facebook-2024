import { expect, afterEach, beforeAll, afterAll, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { serviceWorker } from '../app/core/msw/worker'

expect.extend(matchers)

// Start worker before all tests
beforeAll(() => {
  serviceWorker.listen()
})

beforeEach(() => {
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

//  Close worker after all tests
afterAll(() => {
  serviceWorker.close()
})

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  serviceWorker.resetHandlers()
  cleanup()
})
