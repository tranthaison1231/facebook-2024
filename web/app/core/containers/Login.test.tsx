import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from './Login'
import { QueryClientProvider } from '@/core/providers/react-query'
import { errorMessages } from '@/core/constants/error-messages'
import { getToken } from '@/core/helpers/token'
import { loginDtoMock, loginMockError, loginMockSuccess } from '@/core/mocks/auth'
import { Toaster } from 'sonner'

describe('Login component', () => {
  const renderLogin = () => {
    render(
      <QueryClientProvider>
        <Toaster richColors position="top-right" />
        <Login />
      </QueryClientProvider>
    )
  }

  it('should render the facebook description', () => {
    renderLogin()
    const facebookDescription = screen.getByText(
      /Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn./i
    )

    expect(facebookDescription).toBeInTheDocument()
  })

  it('should display validation errors based on login schema', async () => {
    renderLogin()

    const submitButton = screen.getByRole('button', { name: /login/i })

    fireEvent.click(submitButton)

    const emailError = await screen.findByText(errorMessages.email)
    const passwordError = await screen.findByText(errorMessages.password)

    expect(emailError).toBeInTheDocument()
    expect(passwordError).toBeInTheDocument()
  })

  it('should set token to local storage and reload the page when login successfully', async () => {
    Object.defineProperty(window, 'location', {
      value: { reload: vi.fn() }
    })

    renderLogin()

    const emailInput = screen.getByPlaceholderText(/Email address and phone number/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    fireEvent.input(emailInput, { target: { value: loginDtoMock.email } })
    fireEvent.input(passwordInput, { target: { value: loginDtoMock.password } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })

    expect(getToken()).toBe(loginMockSuccess.token)

    expect(window.location.reload).toHaveBeenCalled()
  })

  it('should display error message when login failed', async () => {
    renderLogin()

    const emailInput = screen.getByPlaceholderText(/Email address and phone number/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    const wrongPassword = 'wrong-password'

    fireEvent.input(emailInput, { target: { value: loginDtoMock.email } })
    fireEvent.input(passwordInput, { target: { value: wrongPassword } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })

    const errorMessage = await screen.findByText(loginMockError.message)

    expect(errorMessage).toBeInTheDocument()
  })
})
