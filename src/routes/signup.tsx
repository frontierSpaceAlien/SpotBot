import { createFileRoute } from '@tanstack/react-router'
import SignUpForm from '@/components/SignUpForm'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-114px)] flex justify-center">
      <div className="w-150">
        <SignUpForm />
      </div>
    </div>
  )
}
