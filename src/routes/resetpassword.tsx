import { createFileRoute, redirect } from '@tanstack/react-router'
import ResetPassword from '@/components/ResetPassword'

export const Route = createFileRoute('/resetpassword')({
  component: RouteComponent,
  beforeLoad: async ({ context, location }) => {
    // Allow unauthenticated access to reset password page
    // Supabase will validate the token in the URL automatically
    // The recovery token should be in the URL as: #access_token=...&type=recovery
    const hash = location.hash
    if (!hash.includes('access_token') || !hash.includes('type=recovery')) {
      console.warn('No recovery token found in URL')
      // Still allow the page to load, but the form will handle the error
    }
  },
})

function RouteComponent() {
  return (
    <div>
      <ResetPassword />
    </div>
  )
}
