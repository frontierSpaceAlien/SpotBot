import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsKimberly } from '@/data/normalsData'
import Kimberly from '@/images/character_kimberly_l.png'

export const Route = createFileRoute('/character/kimberly')({
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
        normals={normalsKimberly}
        headerImg={Kimberly}
        character="Kimberly"
      />
    </div>
  )
}
