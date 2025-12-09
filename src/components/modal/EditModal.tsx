import CloseIcon from '@mui/icons-material/Close'
import EditComboForm from './forms/EditComboForm'
import EditOkiForm from './forms/EditOkiForm'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  boxTitle?: string
  selectedData: any
  setNewData: (e: any) => void
}

export function EditModal({
  isOpen,
  onClose,
  boxTitle,
  selectedData,
  setNewData,
}: ModalProps) {
  function getData(name: any) {
    setNewData(name)
  }
  return (
    <div
      className={
        'fixed inset-0 flex flex-col justify-center items-center transition-colors bg-black/70 ' +
        `${isOpen ? 'block' : 'hidden'}`
      }
      onClick={onClose}
    >
      <div
        className={
          'bg-[#161616] border border-gray-400 rounded rounded-b-none p-6 max-w-7xl w-96 ' +
          `${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
        }
      >
        <div
          className="flex flex-row justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl uppercase font-semibold">Edit {boxTitle}</h1>
          <button
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={onClose}
          >
            <CloseIcon className="text-white" />
          </button>
        </div>
      </div>
      <div
        className="bg-[#161616] border border-gray-400 rounded p-6 max-w-7xl w-96  border-t-0 rounded-t-none"
        onClick={(e) => e.stopPropagation()}
      >
        {boxTitle?.match('oki/setplay') ? (
          <EditOkiForm
            returnData={(e) => {
              getData(e)
            }}
            close={onClose}
            editData={selectedData}
          />
        ) : (
          <EditComboForm
            returnData={(e) => {
              getData(e)
            }}
            close={onClose}
            editData={selectedData}
          />
        )}
      </div>
    </div>
  )
}
