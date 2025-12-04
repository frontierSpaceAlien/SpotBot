import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsLuke } from '@/data/normalsData'
import Luke from '@/images/character_luke_l.png'

export const Route = createFileRoute('/character/luke')({
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
        normals={normalsLuke}
        headerImg={Luke}
        character="Luke"
      />
    </div>
  )
}
