import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsChunli } from '@/data/normalsData'
import Chunli from '@/images/character_chunli_l.png'

export const Route = createFileRoute('/character/chunli')({
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
        normals={normalsChunli}
        headerImg={Chunli}
        character="Chun-Li"
      />
    </div>
  )
}
