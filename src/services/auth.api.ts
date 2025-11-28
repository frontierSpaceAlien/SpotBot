import { createServerFn } from '@tanstack/react-start'
import { SignUpSchema } from './auth.schema'
import { getSupabaseServerClient } from '@/utils/supabase/server'

export const signUp = createServerFn()
  .inputValidator(SignUpSchema)
  .handler(async ({ data }) => {
    const { data: userData, error } =
      await getSupabaseServerClient().auth.signUp({
        email: data.email,
        password: data.password,
      })

    if (error) {
      switch (error.code) {
        case 'email_exists':
          throw new Error('An account with this email already exists.')
        case 'weak_password':
          throw new Error('The password provided is too weak.')
        default:
          throw new Error(error.message)
      }
    }

    if (userData.user) {
      return userData.user.id
    }

    throw new Error('User sign-up failed for an unknown reason.')
  })
