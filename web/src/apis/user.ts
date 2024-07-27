import httpRequest from '@/utils/httpRequest'

const getSearchUserAPI = async (inputSearch: string, type = 'less') => {
  const res = await httpRequest.get('/users/search', {
    params: {
      q: inputSearch,
      type
    }
  })

  return res.data
}

export { getSearchUserAPI }
