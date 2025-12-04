import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsSagat } from '@/data/normalsData'
import Sagat from '@/images/character_sagat_l.png'

export const Route = createFileRoute('/character/sagat')({
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
        normals={normalsSagat}
        headerImg={Sagat}
        character="Sagat"
      />
    </div>
  )
}
