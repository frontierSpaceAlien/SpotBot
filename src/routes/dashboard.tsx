import { createFileRoute } from '@tanstack/react-router'
import CharacterHeader from '@/components/CharacterHeader'
import TechBox from '@/components/TechBox'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-114px)]">
      <CharacterHeader />
      <div>
        <TechBox boxTitle="Combos" />
      </div>
    </div>
  )
}
