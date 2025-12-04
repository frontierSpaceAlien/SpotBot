import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsJp } from '@/data/normalsData'
import JP from '@/images/character_jp_l.png'

export const Route = createFileRoute('/character/jp')({
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
      <CharacterContent normals={normalsJp} headerImg={JP} character="JP" />
    </div>
  )
}
