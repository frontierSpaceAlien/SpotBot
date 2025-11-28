import { useRouter } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signUp } from '@/services/auth.api'

interface SignUpFormProps {
  className?: string
}

interface SignUpFormData {
  email: string
  password: string
  confirmPassword: string
}

export default function SignUpForm({ className = '' }: SignUpFormProps) {
  const queryClient = useQueryClient()
  const router = useRouter()

  const signUpMutation = useMutation({
    mutationFn: (data: Parameters<typeof signUp>[0]) => signUp(data),
    onSuccess: () => {
      console.log('Sign-up successful')
      queryClient.resetQueries()
      router.invalidate()
      form.reset()
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as SignUpFormData,
    onSubmit: ({ value }) => {
      signUpMutation.mutate({
        data: {
          email: value.email,
          password: value.password,
          confirmPassword: value.confirmPassword,
        },
      })
    },
  })

  return (
    <div className={`p-4 rounded ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        Email
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <form.Field name="email">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="email"
              id="email"
              name={field.name}
              required
              onBlur={field.handleBlur}
              value={field.state.value}
              placeholder="Email"
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        Password
        <label htmlFor="password" className="sr-only">
          Password
        </label>
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
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
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
              disabled={!canSubmit}
            >
              {isSubmitting ? '...' : 'Sign Up'}
            </button>
          )}
        />
      </form>
    </div>
  )
}
