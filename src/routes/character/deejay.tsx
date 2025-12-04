import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsDeeJay } from '@/data/normalsData'
import DeeJay from '@/images/character_deejay_l.png'

export const Route = createFileRoute('/character/deejay')({
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
        normals={normalsDeeJay}
        headerImg={DeeJay}
        character="Dee Jay"
      />
    </div>
  )
}
