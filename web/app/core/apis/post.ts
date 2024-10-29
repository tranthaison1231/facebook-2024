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
  id: string
  title: string
  content: string
  totalLikes: number
  image?: string
  owner: User
  comments: Comment[]
  createdAt: Date
  updatedAt: Date
}

export const getPosts = async ({ pageParam }: { pageParam: number }) => {
  const res = await request.get<{
    items: Post[]
    total: number
    page: number
    limit: number
  }>(`/posts?page=${pageParam}&limit=${3}`)

  return res.data.items
}

interface CreatePostDto {
  content: string
  images: string[]
}

export const createPost = async (post: CreatePostDto) => {
  const res = await request.post<Post>('/posts', post)
  return res.data
}

export const deletePost = async (postId: string) => {
  const rest = await request.delete(`/posts/${postId}`)

  return rest.data
}

export const likePost = async (postId: string) => {
  const res = await request.put(`/posts/${postId}/like`)

  return res.data
}
