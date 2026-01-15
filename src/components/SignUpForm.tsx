import { useRouter } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { signUp } from '@/services/auth.api'

interface SignUpFormData {
  email: string
  password: string
  confirmPassword: string
}

export default function SignUpForm() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const signUpMutation = useMutation({
    mutationFn: (data: Parameters<typeof signUp>[0]) => signUp(data),
    onSuccess: (response) => {
      if (response === 'Success') {
        toast.success('Sign Up Successful')
        queryClient.resetQueries()
        router.invalidate()
        form.reset()
      } else {
        toast.error(response)
      }
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as SignUpFormData,
    onSubmit: ({ value }) => {
      if (value.password != value.confirmPassword) {
        toast.error('Passwords do not match.')
        return
      } else {
        signUpMutation.mutate({
          data: {
            email: value.email,
            password: value.password,
            confirmPassword: value.confirmPassword,
          },
        })
      }
    },
  })

  return (
    <div className={`p-4 rounded`}>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
              onBlur={field.handleBlur}
              value={field.state.value}
              placeholder="Email"
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
