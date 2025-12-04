import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsRyu } from '@/data/normalsData'
import Ryu from '@/images/character_ryu_l.png'

export const Route = createFileRoute('/character/ryu')({
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
      <CharacterContent normals={normalsRyu} headerImg={Ryu} character="Ryu" />
    </div>
  )
}
