import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsJamie } from '@/data/normalsData'
import Jamie from '@/images/character_jamie_l.png'

export const Route = createFileRoute('/character/jamie')({
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
        normals={normalsJamie}
        headerImg={Jamie}
        character="Jamie"
      />
    </div>
  )
}
