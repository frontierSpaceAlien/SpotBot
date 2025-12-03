import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterHeader from '@/components/CharacterHeader'
import TechBox from '@/components/TechBox'
import { comboData } from '@/data/comboData'
import { okiData } from '@/data/okiData'
import { comboColumns } from '@/components/table/ComboColumns'
import { okiColumns } from '@/components/table/OkiColumns'
import NormalsBox from '@/components/NormalsBox'

export const Route = createFileRoute('/dashboard copy')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-114px)] p-5 space-y-5 mx-auto max-w-7xl max-2xl:max-w-none max-2xl:mx-0">
      <CharacterHeader />
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <TechBox
            boxTitle="combos/bnb"
            defaultData={comboData}
            columns={comboColumns}
          />
          <TechBox
            boxTitle="oki/setplay"
            defaultData={okiData}
            columns={okiColumns}
          />
        </div>
        <div className="w-full md:flex-1">
          <NormalsBox />
        </div>
      </div>
    </div>
  )
}
