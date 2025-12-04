import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsGuile } from '@/data/normalsData'
import Guile from '@/images/character_guile_l.png'

export const Route = createFileRoute('/character/guile')({
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
        normals={normalsGuile}
        headerImg={Guile}
        character="Guile"
      />
    </div>
  )
}
