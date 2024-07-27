import { useEffect, useState } from 'react'
import { getSearchUserAPI } from '@/apis/user'

export const useGetUsers = (inputSearch: string) => {
  const [UsersResult, setUsersResult] = useState([])
  useEffect(() => {
    if (!inputSearch) {
      setUsersResult([])
      return
    }
    const getSearchUser = async () => {
      try {
        const res = await getSearchUserAPI(inputSearch)
        setUsersResult(res.data)
      } catch (error) {
        setUsersResult([])
      }
    }
    getSearchUser()
  }, [inputSearch])
  return { UsersResult }
}
