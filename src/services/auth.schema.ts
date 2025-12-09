import { z } from 'zod'

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type AuthState =
  | {
      isAuthenticated: false
    }
  | {
      isAuthenticated: true
      user: User
    }

export type User = { email?: string }
