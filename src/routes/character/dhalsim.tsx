import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsDhalsim } from '@/data/normalsData'
import Dhalsim from '@/images/character_dhalsim_l.png'

export const Route = createFileRoute('/character/dhalsim')({
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
        normals={normalsDhalsim}
        headerImg={Dhalsim}
        character="Dhalsim"
      />
    </div>
  )
}
