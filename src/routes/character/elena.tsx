import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsElena } from '@/data/normalsData'
import Elena from '@/images/character_elena_l.png'

export const Route = createFileRoute('/character/elena')({
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
        normals={normalsElena}
        headerImg={Elena}
        character="Elena"
      />
    </div>
  )
}
