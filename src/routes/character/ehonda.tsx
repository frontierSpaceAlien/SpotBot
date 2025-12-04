import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsEhonda } from '@/data/normalsData'
import EHonda from '@/images/character_honda_l.png'

export const Route = createFileRoute('/character/ehonda')({
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
        normals={normalsEhonda}
        headerImg={EHonda}
        character="E. Honda"
      />
    </div>
  )
}
