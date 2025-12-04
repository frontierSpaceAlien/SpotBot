import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsLily } from '@/data/normalsData'
import Lily from '@/images/character_lily_l.png'

export const Route = createFileRoute('/character/lily')({
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
        normals={normalsLily}
        headerImg={Lily}
        character="Lily"
      />
    </div>
  )
}
