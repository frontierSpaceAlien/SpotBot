import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsCammy } from '@/data/normalsData'
import Cammy from '@/images/character_cammy_l.png'

export const Route = createFileRoute('/character/cammy')({
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
        normals={normalsCammy}
        headerImg={Cammy}
        character="Cammy"
      />
    </div>
  )
}
