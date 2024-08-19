import request from '@/helpers/request'

interface Post {
  title: string
  content: string
}

export const getPosts = async () => {
  const res = await request.get<Post>('/posts')
  return res.data
}

interface CreatePostDto {
  content: string
  images: string[]
}

export const createPost = async (post: CreatePostDto) => {
  const res = await request.post<Post>('/posts', post)
  return res.data
}
