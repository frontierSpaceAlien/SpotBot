import { createServerFn } from '@tanstack/react-start'
import { SignInSchema, SignUpSchema } from './auth.schema'
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

export const signIn = createServerFn()
  .inputValidator(SignInSchema)
  .handler(async ({ data }) => {
    const { error } = await getSupabaseServerClient().auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      return { error: error.message }
    }
  })

export const signOut = createServerFn().handler(async () => {
  await getSupabaseServerClient().auth.signOut()
})

export const getUser = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient()

  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    return { isAuthenticated: false }
  }

  return {
    isAuthenticated: true,
    user: {
      id: data.user.id,
      email: data.user.email,
    },
  }
})
