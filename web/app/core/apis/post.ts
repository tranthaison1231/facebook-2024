import request from '@/core/helpers/request'
import { type User } from './user'


export interface Comment {
  id: number
  content: string
  user: User
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  id: number
  title: string
  content: string
  totalLikes: number
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

export const getPosts = async () => {
  const res = await request.get<Post[]>('/posts')
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
