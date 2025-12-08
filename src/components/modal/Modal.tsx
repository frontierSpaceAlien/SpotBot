import CloseIcon from '@mui/icons-material/Close'
import AddComboForm from './AddComboForm'
import AddOkiForm from './AddOkiForm'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  boxTitle?: string
  setNewData: (e: any) => void
}

export function Modal({ isOpen, onClose, boxTitle, setNewData }: ModalProps) {
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
          <h1 className="text-2xl uppercase font-semibold">Add {boxTitle}</h1>
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
          <AddOkiForm
            returnData={(e) => {
              getData(e)
            }}
            close={onClose}
          />
        ) : (
          <AddComboForm
            returnData={(e) => {
              getData(e)
            }}
            close={onClose}
          />
        )}
      </div>
    </div>
  )
}
