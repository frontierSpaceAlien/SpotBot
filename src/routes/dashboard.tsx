import { createFileRoute } from '@tanstack/react-router'
import CharacterHeader from '@/components/CharacterHeader'
import TechBox from '@/components/TechBox'
import { comboData } from '@/data/comboData'
import { okiData } from '@/data/okiData'
import { comboColumns } from '@/components/table/ComboColumns'
import { okiColumns } from '@/components/table/OkiColumns'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-[calc(100vh-114px)]">
      <CharacterHeader />
      <div className="space-y-5">
        <TechBox
          boxTitle="Combos"
          defaultData={comboData}
          columns={comboColumns}
        />
        <TechBox
          boxTitle="Oki/Setplay"
          defaultData={okiData}
          columns={okiColumns}
        />
      </div>
    </div>
  )
}
