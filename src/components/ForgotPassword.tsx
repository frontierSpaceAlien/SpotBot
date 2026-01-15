import { useRouter } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { forgotPasswordLink } from '@/services/auth.api'

export default function ForgotPassword() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const forgotPasswordMutation = useMutation({
    mutationFn: (data: Parameters<typeof forgotPasswordLink>[0]) =>
      forgotPasswordLink(data),
    onSuccess: () => {
      toast.success('Password reset link has been sent to your email.')
      queryClient.resetQueries()
      router.invalidate()
      form.reset()
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
    },
    onSubmit: ({ value }) => {
      forgotPasswordMutation.mutate({
        data: {
          email: value.email,
        },
      })
    },
  })

  return (
    <div className={`p-4 rounded`}>
      <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
      <p className="mb-4">
        Enter your registered email to reset your password.
      </p>
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
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              className="w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer hover:bg-[#1a1a1a]"
              type="submit"
              disabled={!canSubmit}
            >
              {isSubmitting ? '...' : 'Send'}
            </button>
          )}
        />
      </form>
    </div>
  )
}
