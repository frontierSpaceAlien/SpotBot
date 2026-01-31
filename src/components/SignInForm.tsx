import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useForm } from '@tanstack/react-form'
import { signIn } from '@/services/auth.api'

interface SignInForm {
  email: string
  password: string
}

export default function SignInForm() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const signInMutation = useMutation({
    mutationFn: (data: Parameters<typeof signIn>[0]) => signIn(data),
    onSuccess: (response) => {
      if (response?.error) {
        toast.error(response.error)
        return
      }
      if (response) {
        form.reset()
        navigate({ to: '/home' })
        queryClient.resetQueries()
        toast.success('Sign in Successful')
      }
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as SignInForm,
    onSubmit: ({ value }) => {
      signInMutation.mutate({
        data: { email: value.email, password: value.password },
      })
    },
  })

  return (
    <div className={`p-4 rounded`}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        Email
        <form.Field name="email">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="email"
              id="email"
              name={field.name}
              required
              placeholder="Email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
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
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              className="w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer disabled:bg-red-300 hover:bg-[#1a1a1a]"
              disabled={!canSubmit}
            >
              Login
            </button>
          )}
        ></form.Subscribe>
      </form>
      <div className="mt-2 text-sm text-white-500 cursor-pointer hover:underline">
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
      <div className="mt-2 text-sm text-white-500 cursor-pointer hover:underline">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  )
}
