import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsBlanka } from '@/data/normalsData'
import Blanka from '@/images/character_blanka_l.png'

export const Route = createFileRoute('/character/blanka')({
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
        normals={normalsBlanka}
        headerImg={Blanka}
        character="Blanka"
      />
    </div>
  )
}
