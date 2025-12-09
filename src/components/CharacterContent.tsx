import CharacterHeader from '@/components/CharacterHeader'
import TechBox from '@/components/TechBox'
import { comboColumns } from '@/components/table/ComboColumns'
import { okiColumns } from '@/components/table/OkiColumns'
import NormalsBox from '@/components/NormalsBox'

interface CharacterContentProps {
  normals: Array<any>
  headerImg: any
  character: string
  combo: Array<any>
  oki: Array<any>
}

export default function CharacterContent({
  normals,
  headerImg,
  character,
  combo,
  oki,
}: CharacterContentProps) {
  return (
    <div className="min-h-[calc(100vh-150px)] p-5 space-y-5 mx-auto max-w-7xl max-2xl:max-w-none max-2xl:mx-0">
      <CharacterHeader image={headerImg} character={character} />
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5">
          <TechBox
            boxTitle="combos/bnb"
            defaultData={combo}
            columns={comboColumns}
            character={character}
          />
          <TechBox
            boxTitle="oki/setplay"
            defaultData={oki}
            columns={okiColumns}
            character={character}
          />
        </div>
        <div className="w-full md:flex-1">
          <NormalsBox character={normals} />
        </div>
      </div>
    </div>
  )
}
