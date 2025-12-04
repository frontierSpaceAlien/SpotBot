import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsKen } from '@/data/normalsData'
import Ken from '@/images/character_ken_l.png'

export const Route = createFileRoute('/character/ken')({
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
      <CharacterContent normals={normalsKen} headerImg={Ken} character="Ken" />
    </div>
  )
}
