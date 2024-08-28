import { errorMessages } from '@/constants/error-messages'
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: errorMessages.email }),
  password: z.string().min(6, { message: errorMessages.password })
})

export const createPostSchema = z.object({
  content: z.string().min(1, { message: errorMessages.content }),
  images: z.array(z.string())
})
