import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsMbison } from '@/data/normalsData'
import Mbison from '@/images/character_vega_l.png'

export const Route = createFileRoute('/character/mbison')({
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
        normals={normalsMbison}
        headerImg={Mbison}
        character="M. Bison"
      />
    </div>
  )
}
