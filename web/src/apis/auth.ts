import { configs } from '../configs/configs'

interface LoginDto {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginDto) => {
  const res = await fetch(`${configs.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const json = await res.json()

  if (json.status !== 200) {
    throw new Error(json.message)
  }

  return json
}

export const signUp = async (email: string, password: string) => {
  const res = await fetch(`${configs.API_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const json = await res.json()
  return json
}
