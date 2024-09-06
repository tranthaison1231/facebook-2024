import request from '@/core/helpers/request'

export const getSearchUser = async (inputSearch: string, type = 'less') => {
  const res = await request.get('/users/search', {
    params: {
      q: inputSearch,
      type
    }
  })

  return res.data
}

export interface User {
  id: number
  fullName: string
  avatar: string
}

export const getMe = async () => {
  const res = await request.get<User>('/users/me')
  return res.data
}
