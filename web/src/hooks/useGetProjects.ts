import { useEffect, useState } from 'react'
import { getProjects as getProjectsApi } from '../apis/user'

export const useGetProjects = () => {
  const [projects, setProjects] = useState<
    {
      id: number
      name: string
      status: string
    }[]
  >([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getProjectsApi()
        setProjects(data.items)
      } catch (error) {
        console.error(error)
      }
    }
    getProjects()
  }, [])

  return { projects, setProjects }
}
