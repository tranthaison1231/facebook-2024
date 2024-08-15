import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email is not valid!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters!' })
})
