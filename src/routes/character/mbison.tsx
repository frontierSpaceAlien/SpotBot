import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsMbison } from '@/data/normalsData'
import Mbison from '@/images/character_vega_l.png'
import { getTech } from '@/services/tech.api'

export const Route = createFileRoute('/character/mbison')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
  loader: async () => {
    try {
      const data = await getTech({ data: { character: 'M. Bison' } })
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
        normals={normalsMbison}
        headerImg={Mbison}
        character="M. Bison"
        combo={comboData}
        oki={okiData}
      />
    </div>
  )
}
