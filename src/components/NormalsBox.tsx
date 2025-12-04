import { normalsColumns } from './table/NormalsColumns'
import NormalsTable from './table/NormalsTable'

interface NormalsBoxProps {
  character: Array<any>
}

export default function NormalsBox(character: NormalsBoxProps) {
  return (
    <div className="max-w-5xl">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded rounded-b-none">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold uppercase text-lg">Normals</p>
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-128 border border-gray-400 rounded overflow-y-auto border-t-0 rounded-t-none">
        <NormalsTable data={character.character} columns={normalsColumns} />
      </div>
    </div>
  )
}
