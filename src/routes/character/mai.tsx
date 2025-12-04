import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsMai } from '@/data/normalsData'
import Mai from '@/images/character_mai_l.png'

export const Route = createFileRoute('/character/mai')({
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
        normals={normalsMai}
        headerImg={Mai}
        character="Mai"
      />
    </div>
  )
}
