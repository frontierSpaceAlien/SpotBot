import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { RemoveModal } from './modal/RemoveModal'
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
  const [openRemove, setOpenRemove] = React.useState<boolean>(false)
  const [selectedRow, setSelectedRow] = React.useState<boolean>(true)
  const [filteredData, setFilteredData] = React.useState([])

  function rowSelect(e: any) {
    if (e !== '-1') {
      setSelectedRow(false)
    } else {
      setSelectedRow(true)
    }
  }

  function setFilter(e: any) {
    setFilteredData(e)
  }

  function triggerDelete() {
    setData(filteredData)
    setFilteredData([])
  }

  return (
    <div className="max-w-5xl">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded rounded-b-none">
        <div className="flex items-center justify-between">
          <p className="text-white font-semibold uppercase text-lg">
            {boxTitle}
          </p>
          <div>
            <button
              className="cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setOpen(true)}
            >
              <AddIcon />
            </button>
            {/* TODO add edit functionality */}
            <button className="cursor-pointer hover:scale-110 transition-transform">
              <EditIcon />
            </button>
            <button
              className="cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setOpenRemove(true)}
              disabled={selectedRow}
            >
              <DeleteIcon style={{ color: 'red' }} />
            </button>
          </div>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            boxTitle={boxTitle}
            setNewData={(newComboData: any) =>
              setData((prev) => [...prev, newComboData])
            }
          />
          <RemoveModal
            isOpen={openRemove}
            onClose={() => setOpenRemove(false)}
            boxTitle={boxTitle}
            triggerDelete={() => triggerDelete()}
          />
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-128 border border-gray-400 rounded overflow-y-auto border-t-0 rounded-t-none">
        <TechBoxTable
          data={data}
          columns={columns}
          filterRow={(e: any) => setFilter(e)}
          selectedRow={(e) => rowSelect(e)}
        />
      </div>
    </div>
  )
}
