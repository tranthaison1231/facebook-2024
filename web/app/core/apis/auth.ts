import request from '@/core/helpers/request'
import axios from 'axios'
import configs from '../configs/configs'

interface LoginDto {
  email: string
  password: string
}

interface SignUpDto extends LoginDto {
  firstName: string
  lastName: string
}

export const login = async ({ email, password }: LoginDto) => {
  const res = await request.post('/login', {
    email,
    password
  })

  return res.data
}

export const signUp = async (signUpDto: SignUpDto) => {
  const res = await request.post('/sign-up', signUpDto)
  return res.data
}

export const resetPassword = async (password: string, accessToken: string) => {
  const res = await axios.post(
    `${configs.API_URL}/api/reset-password`,
    { password },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
  return res.data
}
