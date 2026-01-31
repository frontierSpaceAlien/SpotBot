import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterContent from '@/components/CharacterContent'
import { normalsKimberly } from '@/data/normalsData'
import Kimberly from '@/images/character_kimberly_l.png'
import { getTech } from '@/services/tech.api'

export const Route = createFileRoute('/character/kimberly')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
  loader: async () => {
    try {
      const data = await getTech({ data: { character: 'Kimberly' } })
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
        normals={normalsKimberly}
        headerImg={Kimberly}
        character="Kimberly"
        combo={comboData}
        oki={okiData}
      />
    </div>
  )
}
