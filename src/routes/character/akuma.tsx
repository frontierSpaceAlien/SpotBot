import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsAkuma } from '@/data/normalsData'
import Akuma from '@/images/character_gouki_l.png'

export const Route = createFileRoute('/character/akuma')({
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
        normals={normalsAkuma}
        headerImg={Akuma}
        character="Akuma"
      />
    </div>
  )
}
