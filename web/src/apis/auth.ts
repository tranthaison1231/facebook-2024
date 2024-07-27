import { configs } from '../configs/configs'

export const login = async (email: string, password: string) => {
  const res = await fetch(`${configs.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const json = await res.json()

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
