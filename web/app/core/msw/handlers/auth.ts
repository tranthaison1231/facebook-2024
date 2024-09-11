import configs from '@/core/configs/configs'
import { LoginInputs } from '@/core/helpers/schema'
import { loginDtoMock, loginMockError, loginMockSuccess } from '@/core/mocks/auth'
import { HttpResponse, http } from 'msw'

const login = http.post<never, LoginInputs>(configs.API_URL + '/login', async ({ request }) => {
  const { email, password } = await request.json()

  if (email === loginDtoMock.email && password === loginDtoMock.password) {
    return HttpResponse.json(loginMockSuccess)
  }

  return HttpResponse.json(loginMockError, {
    status: 401
  })
})

const authHandlers = [login]

export default authHandlers