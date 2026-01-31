import { createFileRoute, redirect } from '@tanstack/react-router'
import SignUpForm from '@/components/SignUpForm'

export const Route = createFileRoute('/signup')({
  beforeLoad: ({ context }) => {
    if (context.authState.isAuthenticated) {
      throw redirect({ to: '/home' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-150px)] flex justify-center">
      <div className="w-150">
        <SignUpForm />
      </div>
    </div>
  )
}
