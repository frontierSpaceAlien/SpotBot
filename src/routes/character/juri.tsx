import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsJuri } from '@/data/normalsData'
import Juri from '@/images/character_juri_l.png'

export const Route = createFileRoute('/character/juri')({
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
        normals={normalsJuri}
        headerImg={Juri}
        character="Juri"
      />
    </div>
  )
}
