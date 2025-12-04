import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsGief } from '@/data/normalsData'
import Zangief from '@/images/character_zangief_l.png'

export const Route = createFileRoute('/character/zangief')({
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
        normals={normalsGief}
        headerImg={Zangief}
        character="Zangief"
      />
    </div>
  )
}
