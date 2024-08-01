import request from '@/helpers/request'

interface Post {
  title: string
  content: string
}

export const getPosts = async () => {
  const res = await request.get<Post>('/posts')
  return res.data
}
