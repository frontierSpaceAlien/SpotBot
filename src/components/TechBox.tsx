import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import TechTable from '@/components/table/TechBoxTable'
import { AddToCombo, AddToOki } from '@/components/Modal'

interface TechBoxProps {
  boxTitle?: string
  defaultData: Array<any>
  columns: Array<any>
}

export default function TechBox({
  boxTitle,
  defaultData,
  columns,
}: TechBoxProps) {
  const [data, setData] = React.useState(() => [...defaultData])
  function addNew() {
    const newComboData = AddToCombo()
    const newOkiData = AddToOki()

    if (boxTitle === 'Oki/Setplay') {
      setData((prev) => [...prev, newOkiData])
    } else {
      setData((prev) => [...prev, newComboData])
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded rounded-b-none">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold uppercase text-lg">
            {boxTitle}
          </p>
          <button
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={addNew}
          >
            <AddIcon className="text-white" />
          </button>
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-128 border border-gray-400 rounded overflow-y-auto border-t-0 rounded-t-none">
        <TechTable data={data} columns={columns} />
      </div>
    </div>
  )
}
