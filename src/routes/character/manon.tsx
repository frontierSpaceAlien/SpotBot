import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsManon } from '@/data/normalsData'
import Manon from '@/images/character_manon_l.png'

export const Route = createFileRoute('/character/manon')({
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
      <CharacterContent
        normals={normalsManon}
        headerImg={Manon}
        character="Manon"
      />
    </div>
  )
}
