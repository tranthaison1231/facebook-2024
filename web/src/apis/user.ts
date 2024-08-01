import configs from '@/configs/configs'
import httpRequest from '@/utils/httpRequest'

export const getSearchUser = async (inputSearch: string, type = 'less') => {
  const res = await httpRequest.get('/users/search', {
    params: {
      q: inputSearch,
      type
    }
  })

  return res.data
}

export const getMe = async () => {
  const res = await fetch(`${configs.API_URL}/users/me`)
  const data = await res.json()
  return data
}
