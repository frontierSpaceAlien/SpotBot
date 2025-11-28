import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-114px)] bg-[#121312] text-white">
      Da Settings Page
    </div>
  )
}
