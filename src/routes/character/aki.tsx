import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsAKI } from '@/data/normalsData'
import Aki from '@/images/character_aki_l.png'

export const Route = createFileRoute('/character/aki')({
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
        normals={normalsAKI}
        headerImg={Aki}
        character="A.K.I."
      />
    </div>
  )
}
