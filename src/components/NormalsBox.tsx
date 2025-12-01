import { normalsColumns } from './table/NormalsColumns'
import TechBoxTable from './table/TechBoxTable'
import { normalsData } from '@/data/normalsData'

export default function NormalsBox() {
  return (
    <div className="max-w-5xl">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded rounded-b-none">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold uppercase text-lg">Normals</p>
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-128 border border-gray-400 rounded overflow-y-auto border-t-0 rounded-t-none">
        <TechBoxTable data={normalsData} columns={normalsColumns} />
      </div>
    </div>
  )
}
