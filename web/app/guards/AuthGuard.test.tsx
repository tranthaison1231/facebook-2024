import { render } from '@testing-library/react'
import AuthGuard from './AuthGuard'
import { setToken } from '@/helpers/token'

vi.mock('@/containers/login', () => ({
  default: () => <div>Login Component</div>
}))

vi.mock('@remix-run/react', () => ({
  Outlet: () => <div>Outlet Component</div>
}))

describe('AuthGuard', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('should render Login component if no token is found', () => {
    const { getByText } = render(<AuthGuard />)
    expect(getByText('Login Component')).toBeInTheDocument()
  })

  it('should render Outlet component if token is found', () => {
    setToken('dummy-token')
    const { getByText } = render(<AuthGuard />)
    expect(getByText('Outlet Component')).toBeInTheDocument()
  })
})
