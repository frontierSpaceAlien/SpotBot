import { createFileRoute } from '@tanstack/react-router'
import ForgotPassword from '@/components/ForgotPassword'

export const Route = createFileRoute('/forgotpassword')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-150px)] flex justify-center">
      <div className="w-150">
        <ForgotPassword />
      </div>
    </div>
  )
}
