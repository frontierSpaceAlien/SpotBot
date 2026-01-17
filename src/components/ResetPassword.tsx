import { useEffect, useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createClient } from '@supabase/supabase-js'
import type { EmailOtpType } from '@supabase/supabase-js'
import { resetPassword, setSession, verifyOtp } from '@/services/auth.api'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
)

export default function ResetPassword() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [isValidToken, setIsValidToken] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { searchParams } = new URL(window.location.href)
  const token_hash = searchParams.get('token_hash') ?? ''
  const type = searchParams.get('type') ?? ('' as EmailOtpType)

  const setSessionMutation = useMutation({
    mutationFn: (data: Parameters<typeof setSession>[0]) => setSession(data),
    onSuccess: (sesh) => {
      if (sesh === undefined) {
        toast.error(
          'Invalid or expired recovery token. Please request a new password reset.',
        )
        setIsValidToken(false)
      } else {
        setIsValidToken(true)
      }
      setIsLoading(false)
    },
  })

  const OtpMutation = useMutation({
    mutationFn: (data: Parameters<typeof verifyOtp>[0]) => verifyOtp(data),
    onSuccess: (sesh) => {
      setSessionMutation.mutate({
        data: {
          access_token: sesh?.access_token ?? '',
          refresh_token: sesh?.refresh_token ?? '',
        },
      })
    },
  })

  useEffect(() => {
    OtpMutation.mutate({
      data: {
        token: token_hash,
        type: type,
      },
    })
  }, [])

  const resetPasswordMutation = useMutation({
    mutationFn: (data: Parameters<typeof resetPassword>[0]) =>
      resetPassword(data),
    onSuccess: async () => {
      toast.success('Your password has been updated.')
      await supabase.auth.signOut()
      queryClient.resetQueries()
      router.invalidate()
      form.reset()
      router.navigate({ to: '/' })
    },
    onError: (error) => {
      toast.error('Failed to reset password. Please try again.')
      console.error('Reset password error:', error)
    },
  })

  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ value }) => {
      if (value.password !== value.confirmPassword) {
        toast.error('Passwords do not match.')
        return
      }
      if (!value.password || value.password.length < 6) {
        toast.error('Password must be at least 6 characters.')
        return
      }
      resetPasswordMutation.mutate({
        data: {
          password: value.password,
        },
      })
    },
  })

  if (isLoading) {
    return <div className="p-4">Loading...</div>
  }

  if (!isValidToken) {
    return (
      <div className="p-4 rounded">
        <h2 className="text-2xl font-bold mb-2">Invalid Reset Link</h2>
        <p className="mb-4">
          The password reset link is invalid or has expired. Please request a
          new one.
        </p>
      </div>
    )
  }

  return (
    <div className={`p-4 rounded`}>
      <h2 className="text-2xl font-bold mb-2">Enter New Password</h2>
      <p className="mb-4">Please enter your new password below.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        Password
        <form.Field name="password">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="password"
              id="password"
              name={field.name}
              required
              placeholder="Password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        Confirm Password
        <form.Field name="confirmPassword">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="password"
              id="confirmPassword"
              name={field.name}
              required
              placeholder="Confirm Password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className="w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer hover:bg-[#1a1a1a]"
              type="submit"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  )
}
