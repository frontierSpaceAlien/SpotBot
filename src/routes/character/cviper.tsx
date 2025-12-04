import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsCViper } from '@/data/normalsData'
import CViper from '@/images/character_cviper_l.png'

export const Route = createFileRoute('/character/cviper')({
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
        normals={normalsCViper}
        headerImg={CViper}
        character="C. Viper"
      />
    </div>
  )
}
