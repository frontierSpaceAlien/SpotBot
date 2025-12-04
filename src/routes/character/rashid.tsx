import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsRashid } from '@/data/normalsData'
import Rashid from '@/images/character_rashid_l.png'

export const Route = createFileRoute('/character/rashid')({
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
        normals={normalsRashid}
        headerImg={Rashid}
        character="Rashid"
      />
    </div>
  )
}
