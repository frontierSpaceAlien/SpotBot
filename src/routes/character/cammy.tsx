import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsCammy } from '@/data/normalsData'
import Cammy from '@/images/character_cammy_l.png'
import { getTech } from '@/services/tech.api'

export const Route = createFileRoute('/character/cammy')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
  loader: async () => {
    try {
      const data = await getTech({ data: { character: 'Cammy' } })
      return data
    } catch (error) {
      console.error('Error fetching tech: ', error)
      return { error: 'failed to load tech' }
    }
  },
})

function RouteComponent() {
  const data = Route.useLoaderData()
  const comboData = new Array()
  const okiData = new Array()

  if (Array.isArray(data)) {
    data.forEach((value: any) => {
      if (value.tech_type === 'combos/bnb') {
        comboData.push(value.tech)
      }

      if (value.tech_type === 'oki/setplay') {
        okiData.push(value.tech)
      }
    })
  }

  return (
    <div>
      <CharacterContent
        normals={normalsCammy}
        headerImg={Cammy}
        character="Cammy"
        combo={comboData}
        oki={okiData}
      />
    </div>
  )
}
