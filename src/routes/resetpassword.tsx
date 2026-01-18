import { createFileRoute } from '@tanstack/react-router'
import ResetPassword from '@/components/ResetPassword'

export const Route = createFileRoute('/resetpassword')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-150px)] flex justify-center">
      <div className="w-150">
        <ResetPassword />
      </div>
    </div>
  )
}
