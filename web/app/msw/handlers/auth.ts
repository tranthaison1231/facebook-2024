import configs from '@/configs/configs'
import { LoginInputs } from '@/helpers/schema'
import { loginDtoMock, loginMockError, loginMockSuccess } from '@/mocks'
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
