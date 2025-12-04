import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsMarisa } from '@/data/normalsData'
import Marisa from '@/images/character_marisa_l.png'

export const Route = createFileRoute('/character/marisa')({
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
        normals={normalsMarisa}
        headerImg={Marisa}
        character="Marisa"
      />
    </div>
  )
}
