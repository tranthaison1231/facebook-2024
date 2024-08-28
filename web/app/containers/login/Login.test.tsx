import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from '.'
import { QueryClientProvider } from '@/providers/react-query'
import { errorMessages } from '@/constants/error-messages'
import request from '@/helpers/request'

describe('Login component', () => {
  const renderLogin = () => {
    render(
      <QueryClientProvider>
        <Login />
      </QueryClientProvider>
    )
  }

  afterEach(async () => {
    vi.restoreAllMocks()
  })

  it('should render the login form with email, password and submit button', () => {
    renderLogin()
    const emailInput = screen.getByPlaceholderText(/Email address and phone number/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })
    const facebookDescription = screen.getByText(
      /Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn./i
    )

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
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

  it('should call api login when the form is submitted', async () => {
    renderLogin()

    const email = 'ttson.1711@gmail.com'
    const password = '123456'

    const emailInput = screen.getByPlaceholderText(/Email address and phone number/i)
    const passwordInput = screen.getByPlaceholderText(/Password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    fireEvent.input(emailInput, { target: { value: email } })
    fireEvent.input(passwordInput, { target: { value: password } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })
    expect(submitButton).toBeDisabled()

    const loadingSpinner = screen.getByTestId('loading-spinner')

    expect(loadingSpinner).toBeInTheDocument()

    vi.spyOn(request, 'post').mockResolvedValue({ token: 'token' })

    expect(request.post).toHaveBeenCalledTimes(1)
    expect(request.post).toHaveBeenCalledWith('/login', { email, password })
  })
})
