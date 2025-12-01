import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import TechBoxTable from '@/components/table/TechBoxTable'
import { Modal } from '@/components/modal/Modal'

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
  const [open, setOpen] = React.useState<boolean>(false)
  function addNew() {
    // const newComboData = AddToCombo()
    // const newOkiData = AddToOki()
    // if (boxTitle === 'oki/setplay') {
    //   setData((prev) => [...prev, newOkiData])
    // } else {
    //   setData((prev) => [...prev, newComboData])
    // }
  }

  return (
    <div className="max-w-5xl">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded rounded-b-none">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold uppercase text-lg">
            {boxTitle}
          </p>
          <button
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setOpen(true)}
          >
            <AddIcon className="text-white" />
          </button>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            boxTitle={boxTitle}
            setNewData={(newComboData: any) =>
              setData((prev) => [...prev, newComboData])
            }
          />
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-128 border border-gray-400 rounded overflow-y-auto border-t-0 rounded-t-none">
        <TechBoxTable data={data} columns={columns} />
      </div>
    </div>
  )
}
