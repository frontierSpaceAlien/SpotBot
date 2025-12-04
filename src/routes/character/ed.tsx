import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsEd } from '@/data/normalsData'
import Ed from '@/images/character_ed_l.png'

export const Route = createFileRoute('/character/ed')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  return (
    <div>
      <CharacterContent normals={normalsEd} headerImg={Ed} character="Ed" />
    </div>
  )
}
