import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="min-h-[calc(100vh-114px)]">Da Dashboard Page</div>
}
