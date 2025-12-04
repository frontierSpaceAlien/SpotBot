import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsTerry } from '@/data/normalsData'
import Terry from '@/images/character_terry_l.png'

export const Route = createFileRoute('/character/terry')({
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
        normals={normalsTerry}
        headerImg={Terry}
        character="Terry"
      />
    </div>
  )
}
